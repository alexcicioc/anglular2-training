import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px;}
  `]
})

export class RegisterComponent {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  currentOccupation: string;
  availableForHire: boolean;
  mouseOverForm: boolean;

  constructor(private router: Router) {

  }

  register(formValues) {
    console.log(formValues);
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}

