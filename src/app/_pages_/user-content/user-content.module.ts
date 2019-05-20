import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContentRoutingModule } from './user-content-routing.module';

import { UserContentComponent } from './user-content/user-content.component';
import { HeaderComponent } from '@tracker/_pages_/user-content/user-content/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    UserContentRoutingModule
  ],
  declarations: [
    UserContentComponent,
    HeaderComponent
  ],
})
export class UserContentModule {}
