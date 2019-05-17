import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from '../../app-routing.module';
import { environment } from '../../../environments/environment';

export function jwtTokenGetter() {
  return window ? window.localStorage.getItem('token') : null;
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'time-tracker' }),
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        authScheme: '',
        whitelistedDomains: environment.whitelistedDomains
      }
    }),
  ]
})
export class CoreModule {}
