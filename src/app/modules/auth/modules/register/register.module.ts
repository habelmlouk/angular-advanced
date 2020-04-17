import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [{ path: 'register', component: RegisterFormComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class RegisterModule {}
