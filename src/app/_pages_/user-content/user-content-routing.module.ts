import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserContentComponent } from './user-content/user-content.component';

const routes: Routes = [
  {
    path: '',
    component: UserContentComponent,
    children: [
      {
        path: 'tracker',
        loadChildren: '@tracker/_pages_/tracker/tracker.module#TrackerModule'
      },
      {
        path: 'profile',
        loadChildren: '@tracker/_pages_/profile/profile.module#ProfileModule'
      },
      {
        path: 'reports',
        loadChildren: '@tracker/_pages_/reports/reports.module#ReportsModule'
      },
      {
        path: 'projects',
        loadChildren: '@tracker/_pages_/projects/projects.module#ProjectsModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserContentRoutingModule {}
