import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'time-tracker' }),
    AppRoutingModule,
  ]
})
export class CoreModule { }
