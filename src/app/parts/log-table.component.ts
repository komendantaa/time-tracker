/**
 * Created by komendant on 19.03.2018.
 */
import { Input, Component} from '@angular/core';
import {Item} from '../item'

@Component({
    selector: 'log',
    templateUrl: `./log-table.component.html`
})
export class LogComponent{
    @Input() item:Item;
    @Input() items:Item[];
    @Input()  public duplicateItem:Function;

    public isToday(item:Item):boolean{
        let temp = new Date();
        let today = new Date(temp.getFullYear(),temp.getMonth(),temp.getDate());
        temp = new Date(item.endDate);
        let diff = temp.getTime() - today.getTime();
        console.log(diff);
        return diff/1000/60/60 < 24;
    }

}