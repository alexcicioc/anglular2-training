/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CourseList } from '../models/course-list';
import { ErrorResponse } from '../models/error-response';
import { Course } from '../models/course';
import { CourseSessionList } from '../models/course-session-list';
import { StudentAttendanceList } from '../models/student-attendance-list';
import { StudentAttendance } from '../models/student-attendance';

/**
 * Courses resources
 */
@Injectable({
  providedIn: 'root',
})
class CoursesService extends __BaseService {
  static readonly getCoursesPath = '/courses';
  static readonly createCoursePath = '/courses';
  static readonly getCoursePath = '/courses/{courseId}';
  static readonly editCoursePath = '/courses/{courseId}';
  static readonly getCourseSessionsPath = '/courses/{courseId}/sessions';
  static readonly getCourseSessionAttendancesPath = '/courses/{courseId}/sessions/{sessionId}/attendance';
  static readonly createCourseSessionAttendancePath = '/courses/{courseId}/sessions/{sessionId}/attendance';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a list of courses
   * @return Success
   */
  getCoursesResponse(): __Observable<__StrictHttpResponse<CourseList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<CourseList>;
      })
    );
  }
  /**
   * Returns a list of courses
   * @return Success
   */
  getCourses(): __Observable<CourseList> {
    return this.getCoursesResponse().pipe(
      __map(_r => _r.body as CourseList)
    );
  }

  /**
   * Creates a course
   * @param course undefined
   * @return Created
   */
  createCourseResponse(course?: Course): __Observable<__StrictHttpResponse<Course>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = course;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<Course>;
      })
    );
  }
  /**
   * Creates a course
   * @param course undefined
   * @return Created
   */
  createCourse(course?: Course): __Observable<Course> {
    return this.createCourseResponse(course).pipe(
      __map(_r => _r.body as Course)
    );
  }

  /**
   * Returns a course
   * @param params The `CoursesService.GetCourseParams` containing the following parameters:
   *
   * - `courseId`:
   *
   * - `course`:
   *
   * @return Success
   */
  getCourseResponse(params: CoursesService.GetCourseParams): __Observable<__StrictHttpResponse<Course>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.course;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/courses/${params.courseId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Course>;
      })
    );
  }
  /**
   * Returns a course
   * @param params The `CoursesService.GetCourseParams` containing the following parameters:
   *
   * - `courseId`:
   *
   * - `course`:
   *
   * @return Success
   */
  getCourse(params: CoursesService.GetCourseParams): __Observable<Course> {
    return this.getCourseResponse(params).pipe(
      __map(_r => _r.body as Course)
    );
  }

  /**
   * Modifies a course
   * @param courseId undefined
   */
  editCourseResponse(courseId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
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
  }
  /**
   * Modifies a course
   * @param courseId undefined
   */
  editCourse(courseId: number): __Observable<null> {
    return this.editCourseResponse(courseId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns a list of course sessions
   * @param courseId undefined
   * @return Success
   */
  getCourseSessionsResponse(courseId: number): __Observable<__StrictHttpResponse<CourseSessionList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<CourseSessionList>;
      })
    );
  }
  /**
   * Returns a list of course sessions
   * @param courseId undefined
   * @return Success
   */
  getCourseSessions(courseId: number): __Observable<CourseSessionList> {
    return this.getCourseSessionsResponse(courseId).pipe(
      __map(_r => _r.body as CourseSessionList)
    );
  }

  /**
   * Returns a list of course session attendances
   * @param params The `CoursesService.GetCourseSessionAttendancesParams` containing the following parameters:
   *
   * - `sessionId`:
   *
   * - `courseId`:
   *
   * @return Success
   */
  getCourseSessionAttendancesResponse(params: CoursesService.GetCourseSessionAttendancesParams): __Observable<__StrictHttpResponse<StudentAttendanceList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/courses/${params.courseId}/sessions/${params.sessionId}/attendance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudentAttendanceList>;
      })
    );
  }
  /**
   * Returns a list of course session attendances
   * @param params The `CoursesService.GetCourseSessionAttendancesParams` containing the following parameters:
   *
   * - `sessionId`:
   *
   * - `courseId`:
   *
   * @return Success
   */
  getCourseSessionAttendances(params: CoursesService.GetCourseSessionAttendancesParams): __Observable<StudentAttendanceList> {
    return this.getCourseSessionAttendancesResponse(params).pipe(
      __map(_r => _r.body as StudentAttendanceList)
    );
  }

  /**
   * Returns a list of courses
   * @param params The `CoursesService.CreateCourseSessionAttendanceParams` containing the following parameters:
   *
   * - `sessionId`:
   *
   * - `courseId`:
   *
   * - `studenAttendance`:
   *
   * @return Created
   */
  createCourseSessionAttendanceResponse(params: CoursesService.CreateCourseSessionAttendanceParams): __Observable<__StrictHttpResponse<StudentAttendance>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.studenAttendance;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/courses/${params.courseId}/sessions/${params.sessionId}/attendance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudentAttendance>;
      })
    );
  }
  /**
   * Returns a list of courses
   * @param params The `CoursesService.CreateCourseSessionAttendanceParams` containing the following parameters:
   *
   * - `sessionId`:
   *
   * - `courseId`:
   *
   * - `studenAttendance`:
   *
   * @return Created
   */
  createCourseSessionAttendance(params: CoursesService.CreateCourseSessionAttendanceParams): __Observable<StudentAttendance> {
    return this.createCourseSessionAttendanceResponse(params).pipe(
      __map(_r => _r.body as StudentAttendance)
    );
  }
}

module CoursesService {

  /**
   * Parameters for getCourse
   */
  export interface GetCourseParams {
    courseId: number;
    course?: Course;
  }

  /**
   * Parameters for getCourseSessionAttendances
   */
  export interface GetCourseSessionAttendancesParams {
    sessionId: number;
    courseId: number;
  }

  /**
   * Parameters for createCourseSessionAttendance
   */
  export interface CreateCourseSessionAttendanceParams {
    sessionId: number;
    courseId: number;
    studenAttendance?: StudentAttendance;
  }
}

export { CoursesService }
