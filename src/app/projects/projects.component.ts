/**
 * Created by komendant on 25.03.2018.
 */
import { Component, Input } from '@angular/core';

import {Item } from '../../common/base/item';

@Component ({
    selector: 'projects',
    templateUrl: './projects.component.html'
})

export class ProjectsComponent {
    @Input() item: Item;

    projectNames: string[] = ["timer", "nothing", "third"];

    constructor(){}
}