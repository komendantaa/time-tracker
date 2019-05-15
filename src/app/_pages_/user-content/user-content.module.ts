import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContentRoutingModule } from './user-content-routing.module';
import { UserContentComponent } from './user-content/user-content.component';

@NgModule({
  imports: [
    CommonModule,
    UserContentRoutingModule
  ],
  declarations: [
    UserContentComponent,
  ],
})
export class UserContentModule {}
