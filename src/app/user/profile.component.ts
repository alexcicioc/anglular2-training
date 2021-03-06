import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {

  }

  cancel() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    const firstName = new FormControl(this.auth.currentUser.firstName);
    const lastName = new FormControl(this.auth.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName
    });
  }
}
