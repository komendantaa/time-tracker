import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './_pages_/user-content/user-content.module#UserContentModule'
  },
  // {
  //   path: 'auth',
  //   loadChildren: './_pages_/auth/auth.module#AuthModule'
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
