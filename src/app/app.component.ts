import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { HttpService } from '../common/services/http.service';
import {Item } from '../common/base/item'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    timerId: any;
    item: Item;
    items: Item[]=[];
    projectNames: string[];
    counter: string = "0 sec";

    constructor(private HttpService: HttpService){}

    ngOnInit(){
        this.item = new Item('','timer');
        if(!window.localStorage.log){
            this.HttpService.getItems().subscribe((data:Item[]) => {
                this.items = data;
            });
        }
        this.projectNames = ["timer", "nothing", "third"];
        this.findItemInProcess();
    }

    startTracking():void {
        if(this.item.inProcess)return;
        this.item.inProcess = true;
        this.item.startDate = new Date();
        let spentTime:number = 0;
        this.item.spentTimeCounter = 0;
        this.items.push(this.item);
        this.initTimer(spentTime);
    }

    initTimer(spentTime:number):void{
        this.timerId = setInterval(()=>{
            this.item.spentTimeCounter = ++spentTime;
            this.item.spentTime = moment.duration(spentTime, "seconds").format("hh:mm:ss", {trim: false});
            this.counter = moment.duration(spentTime, "seconds").format("H [h] m [min] s [sec]", {trim: "both"});
            window.localStorage.log = JSON.stringify(this.items);
        }, 1000);
    }

    keepTracking():void {
        let spentTime:number = this.item.spentTimeCounter;
        this.initTimer(spentTime);
    }

    public duplicateItem(id:number): void{
        if(this.item.inProcess)return;
        this.item = new Item(this.items[id].taskName, this.items[id].projectName) ;
        this.startTracking();
    }

    stopTracking():void {
        clearInterval(this.timerId);
        this.item.inProcess = false;
        this.item.endDate = new Date();
        window.localStorage.log = JSON.stringify(this.items);
        this.item = new Item('','timer');
    }

    findItemInProcess():any{
        let logStorage: Item[] = JSON.parse(window.localStorage.log||'[]');
        console.log(logStorage);
        logStorage.forEach((i:Item)=>{
            if(i.inProcess){
                this.item = i;
            }
            this.items.push(i);
        });
        if(this.item.inProcess){
            this.keepTracking();
        }
    }
}