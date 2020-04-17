import { NgModule } from '@angular/core';

import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './modules/register.module#RegisterModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [LoginModule, RegisterModule, RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class AuthModule {}
