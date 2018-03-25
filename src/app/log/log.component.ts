/**
 * Created by komendant on 19.03.2018.
 */
import { Input, Component, OnInit } from '@angular/core';
var momentDurationFormatSetup = require("moment-duration-format");

import {Item} from '../../common/base/item';

@Component({
    selector: 'log',
    templateUrl: `./log.component.html`
})
export class LogComponent implements OnInit{
    @Input() item: Item;
    @Input() items: Item[];
    @Input() public duplicateItem: Function;

    constructor(){}

    ngOnInit(){

    }

}