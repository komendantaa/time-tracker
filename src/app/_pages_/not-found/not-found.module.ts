import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from '@tracker/_pages_/not-found/not-found/not-found.component';
import { NotFoundRoutingModule } from '@tracker/_pages_/not-found/not-found-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ],
})
export class NotFoundModule {}
