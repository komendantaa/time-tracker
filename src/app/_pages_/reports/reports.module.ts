import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from '@tracker/_pages_/reports/reports-routing.module';
import { ReportsComponent } from '@tracker/_pages_/reports/reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsComponent],
})
export class ReportsModule {}
