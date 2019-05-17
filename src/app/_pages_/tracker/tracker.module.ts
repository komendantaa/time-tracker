import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from '@tracker/_pages_/tracker/tracker-routing.module';
import { TrackerComponent } from '@tracker/_pages_/tracker/tracker/tracker.component';
import { SharedModule } from '@tracker/modules/shared/shared.module';
import { LogComponent } from '@tracker/components/log/log.component';

@NgModule({
  imports: [CommonModule, SharedModule, TrackerRoutingModule],
  declarations: [TrackerComponent, LogComponent]
})
export class TrackerModule {}
