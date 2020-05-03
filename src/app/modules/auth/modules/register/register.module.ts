import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [{ path: '', component: RegisterFormComponent }];

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [],
  providers: []
})
export class RegisterModule { }
