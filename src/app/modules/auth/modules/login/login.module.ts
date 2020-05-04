import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LoginFormComponent }];

@NgModule({
  declarations: [LoginFormComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
  providers: []
})
export class LoginModule { }
