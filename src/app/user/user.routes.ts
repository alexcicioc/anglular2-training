import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { AuthGuardService } from './auth-guard.service';

export const userRoutes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }
];
