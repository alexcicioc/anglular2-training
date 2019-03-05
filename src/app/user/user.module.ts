import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthGuardService
  ]
})

export class UserModule {

}
