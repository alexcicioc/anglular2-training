/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly xSwaggerPipeSwaggerPath = '/swagger';
  static readonly xSwaggerRouterControllerAuthenticationStudentPath = '/authentication/student';
  static readonly xSwaggerRouterControllerCoursesPath = '/courses';
  static readonly xSwaggerRouterControllerCoursesCourseIdPath = '/courses/{courseId}';
  static readonly xSwaggerRouterControllerCoursesCourseIdSessionsPath = '/courses/{courseId}/sessions';
  static readonly xSwaggerRouterControllerCoursesCourseIdSessionsSessionIdAttendancePath = '/courses/{courseId}/sessions/{sessionId}/attendance';
  static readonly xSwaggerRouterControllerStudentsPath = '/students';
  static readonly xSwaggerRouterControllerStudentsStudentIdPath = '/students/{studentId}';
  static readonly xSwaggerRouterControllerStudentsStudentIdCoursesCourseIdResultsPath = '/students/{studentId}/courses/{courseId}/results';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  xSwaggerPipeSwaggerResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-PIPE',
      this.rootUrl + `/swagger`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerPipeSwagger(): __Observable<null> {
    return this.xSwaggerPipeSwaggerResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerAuthenticationStudentResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
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
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerAuthenticationStudent(): __Observable<null> {
    return this.xSwaggerRouterControllerAuthenticationStudentResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerCoursesResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/courses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerCourses(): __Observable<null> {
    return this.xSwaggerRouterControllerCoursesResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerCoursesCourseIdResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/courses/${courseId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerCoursesCourseId(): __Observable<null> {
    return this.xSwaggerRouterControllerCoursesCourseIdResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerCoursesCourseIdSessionsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/courses/${courseId}/sessions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerCoursesCourseIdSessions(): __Observable<null> {
    return this.xSwaggerRouterControllerCoursesCourseIdSessionsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerCoursesCourseIdSessionsSessionIdAttendanceResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/courses/${courseId}/sessions/${sessionId}/attendance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerCoursesCourseIdSessionsSessionIdAttendance(): __Observable<null> {
    return this.xSwaggerRouterControllerCoursesCourseIdSessionsSessionIdAttendanceResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerStudentsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/students`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerStudents(): __Observable<null> {
    return this.xSwaggerRouterControllerStudentsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerStudentsStudentIdResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/students/${studentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerStudentsStudentId(): __Observable<null> {
    return this.xSwaggerRouterControllerStudentsStudentIdResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
  xSwaggerRouterControllerStudentsStudentIdCoursesCourseIdResultsResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'X-SWAGGER-ROUTER-CONTROLLER',
      this.rootUrl + `/students/${studentId}/courses/${courseId}/results`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  xSwaggerRouterControllerStudentsStudentIdCoursesCourseIdResults(): __Observable<null> {
    return this.xSwaggerRouterControllerStudentsStudentIdCoursesCourseIdResultsResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApiService {
}

export { ApiService }
