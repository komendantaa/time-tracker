import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
// import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from '../app/app.component';
// import { AboutComponent }   from '../app/about.component';
// import { HomeComponent }   from '../app/home.component';
// import { NotFoundComponent }   from '../app/not-found.component';
import { LogComponent }   from '../app/parts/log-table.component';
import { DateWithStringPipe} from './date-with-string.pipe';
import { DateFormatPipe} from './date-format.pipe';

// const appRoutes: Routes =[
//     { path: '', component: HomeComponent},
//     { path: 'about', component: AboutComponent},
//     { path: '**', component: NotFoundComponent }
// ];

@NgModule({
    imports:      [ 
        BrowserModule,
        // RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        LogComponent,
        DateWithStringPipe,
        DateFormatPipe
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }