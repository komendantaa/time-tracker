/**
 * Created by komendant on 19.03.2018.
 */
import { Input, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
var momentDurationFormatSetup = require("moment-duration-format");

import {Item} from '../../common/item';

@Component({
    selector: 'log',
    templateUrl: `./log-table.component.html`
})
export class LogComponent implements OnInit{
    @Input() item: Item;
    @Input() items: Item[];
    @Input() public duplicateItem: Function;

    constructor(){}

    ngOnInit(){

    }

}