import { NgModule } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'login', component: LoginFormComponent }];

@NgModule({
  declarations: [LoginFormComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class LoginModule {}
