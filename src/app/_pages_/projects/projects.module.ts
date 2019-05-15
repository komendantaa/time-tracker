import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from '@tracker/_pages_/projects/projects-routing.module';
import { ProjectsComponent } from '@tracker/_pages_/projects/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent],
})
export class ProjectsModule {}
