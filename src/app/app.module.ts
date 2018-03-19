import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LogComponent }   from './parts/log-table.component';
import { DateWithStringPipe} from './date-with-string.pipe';
import { DateFormatPipe} from './date-format.pipe';


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        LogComponent,
        DateWithStringPipe,
        DateFormatPipe],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }