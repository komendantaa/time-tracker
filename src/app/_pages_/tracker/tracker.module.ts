import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from '@tracker/_pages_/tracker/tracker-routing.module';
import { TrackerComponent } from '@tracker/_pages_/tracker/tracker/tracker.component';

@NgModule({
  imports: [CommonModule, TrackerRoutingModule],
  declarations: [TrackerComponent]
})
export class TrackerModule {}
