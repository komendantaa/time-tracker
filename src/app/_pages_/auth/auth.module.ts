import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from '@tracker/_pages_/auth/auth/auth.component';
import { AuthRoutingModule } from '@tracker/_pages_/auth/auth-routing.module';
import { SharedModule } from '@tracker/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: [AuthComponent],
})
export class AuthModule {}
