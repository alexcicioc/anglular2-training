/* tslint:disable */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { CoursesService } from './services/courses.service';
import { StudentsService } from './services/students.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ApiService,
    AuthenticationService,
    CoursesService,
    StudentsService
  ],
})
export class ApiModule { }
