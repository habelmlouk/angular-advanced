import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @ViewChild('f', { static: false }) form: FormGroup;
  messageGlobal: string = '';

  constructor(private router: Router) { }

  onLogin(): void {
    const { email, password } = this.form.value;
    console.log(email);
    console.log(password);
    this.form.reset();
    this.messageGlobal = 'Login ou mot de passe incorrect';
  }
}
