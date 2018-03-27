/**
 * Created by komendant on 25.03.2018.
 */
import { Component, Input } from '@angular/core';

import {Item } from '../../common/base/item';

@Component ({
    selector: 'control-btns',
    templateUrl: './control-btns.component.html'
})

export class ControlBtnsComponent {

    @Input() item: Item;
    @Input() public startTracking: Function;
    @Input() public stopTracking: Function;

    projectNames: string[] = ["timer", "nothing", "third"];

    constructor(){}
}