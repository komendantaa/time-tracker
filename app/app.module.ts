import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { AppInterfaceComponent } from './components/app-interface.component';
import { ProjectsComponent }   from './components/projects/projects.component';
import { CounterComponent }   from './components/counter/counter.component';
import { ControlBtnsComponent }   from './components/control-btns/control-btns.component';
import { LogComponent }   from './components/log/log.component';
import { RouteNavigationComponent }   from './components/route/route-nav.component';
import { DescriptionComponent } from './components/route/description.component';
import { AboutComponent } from './components/route/about.component';
import { NotFoundComponent } from './components/route/not-found.component';

const appRoutes: Routes =[
    { path: '', component: DescriptionComponent},
    { path: 'about', component: AboutComponent, pathMatch:'full'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ 
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        AppInterfaceComponent,
        ProjectsComponent,
        CounterComponent,
        ControlBtnsComponent,
        LogComponent,
        RouteNavigationComponent,
        DescriptionComponent,
        AboutComponent,
        NotFoundComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }