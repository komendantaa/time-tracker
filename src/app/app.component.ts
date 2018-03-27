import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

import { PreTasksService } from '../common/services/pre-tasks.service';
import {Item } from '../common/base/item';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [PreTasksService]
})
export class AppComponent implements OnInit {

    timerId: any;
    item: Item;
    items: Item[] = [];
    counter: string = "0 sec";
    private PreTasksServiceSub: any;

    constructor(private PreTasksService: PreTasksService){}

    ngOnInit(){
        this.item = new Item('','timer');
        if(!window.localStorage.log){
            this.PreTasksServiceSub = this.PreTasksService.getItems().subscribe((data:Item[]) => {
                this.items = data;
            });
        }
        this.findItemInProcess();
    }

    ngOnDestroy() {
        this.PreTasksServiceSub.unsubscribe();
    }

    public startTracking():void {
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

    findItemInProcess():void{
        let logStorage: Item[] = JSON.parse(window.localStorage.log||'[]');
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