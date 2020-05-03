import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule'
      },
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class AuthModule { }
