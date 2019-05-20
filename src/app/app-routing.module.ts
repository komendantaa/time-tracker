import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@tracker/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './_pages_/user-content/user-content.module#UserContentModule',
    canActivateChild: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './_pages_/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: './_pages_/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
