/**
 * Created by komendant on 19.03.2018.
 */
import { Input, Component } from '@angular/core';
var momentDurationFormatSetup = require("moment-duration-format");

import {Item} from '../../shared/base/item';

@Component({
    selector: 'log',
    templateUrl: `./log.component.html`
})

export class LogComponent {
    @Input() item: Item;
    @Input() items: Item[];
    @Input() public duplicateItem: Function;

    constructor(){}
}