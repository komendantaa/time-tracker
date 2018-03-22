import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from '../app/app.component';
import { LogComponent }   from '../app/parts/log-table.component';
import { DateWithStringPipe} from './date-with-string.pipe';
import { DateFormatPipe} from './date-format.pipe';


@NgModule({
    imports:      [ 
        BrowserModule,
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