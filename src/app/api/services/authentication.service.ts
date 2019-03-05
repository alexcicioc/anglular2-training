/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Student } from '../models/student';
import { ErrorResponse } from '../models/error-response';
import { Authentication } from '../models/authentication';

/**
 * Authentication resources
 */
@Injectable({
  providedIn: 'root',
})
class AuthenticationService extends __BaseService {
  static readonly loginStudentPath = '/authentication/student';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Authenticate the user
   * @param authentication undefined
   * @return OK
   */
  loginStudentResponse(authentication?: Authentication): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = authentication;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/authentication/student`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Student>;
      })
    );
  }
  /**
   * Authenticate the user
   * @param authentication undefined
   * @return OK
   */
  loginStudent(authentication?: Authentication): __Observable<Student> {
    return this.loginStudentResponse(authentication).pipe(
      __map(_r => _r.body as Student)
    );
  }
}

module AuthenticationService {
}

export { AuthenticationService }
