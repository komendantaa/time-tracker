/**
 * Created by komendant on 25.03.2018.
 */
import { Component, Input} from '@angular/core';

@Component ({
    selector: 'counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {

    @Input() counter: string;

    constructor(){}
}