import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app/app.component';
import { CounterComponent }   from './app/counter/counter.component';
import { LogComponent }   from './app/log/log.component';
import { RouteNavigationComponent }   from './app/route/route-nav.component';
import { DescriptionComponent } from './app/route/description.component';
import { AboutComponent } from './app/route/about.component';
import { NotFoundComponent } from './app/route/not-found.component';

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
        CounterComponent,
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