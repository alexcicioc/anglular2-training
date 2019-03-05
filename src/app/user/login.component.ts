import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthenticationService } from '../api/services/authentication.service';
import { Authentication } from '../api/models/authentication';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px;}
  `]
})

export class LoginComponent {
  authentication: Authentication;
  email: string;
  password: string;
  mouseOverLogin: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  login(formValues) {
    this.authentication = { ...formValues };
    console.log(this.authService.loginStudent(this.authentication));
    // this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}

