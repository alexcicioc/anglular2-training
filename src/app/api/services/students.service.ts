/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StudentList } from '../models/student-list';
import { ErrorResponse } from '../models/error-response';
import { Student } from '../models/student';
import { CourseResultList } from '../models/course-result-list';
import { CourseResult } from '../models/course-result';

/**
 * Students resources
 */
@Injectable({
  providedIn: 'root',
})
class StudentsService extends __BaseService {
  static readonly getStudentsPath = '/students';
  static readonly createStudentPath = '/students';
  static readonly getStudentPath = '/students/{studentId}';
  static readonly editStudentPath = '/students/{studentId}';
  static readonly getResultsPath = '/students/{studentId}/courses/{courseId}/results';
  static readonly createResultPath = '/students/{studentId}/courses/{courseId}/results';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns a list of students
   * @return Success
   */
  getStudentsResponse(): __Observable<__StrictHttpResponse<StudentList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<StudentList>;
      })
    );
  }
  /**
   * Returns a list of students
   * @return Success
   */
  getStudents(): __Observable<StudentList> {
    return this.getStudentsResponse().pipe(
      __map(_r => _r.body as StudentList)
    );
  }

  /**
   * Adds a new student
   * @param student undefined
   * @return Created
   */
  createStudentResponse(student?: Student): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = student;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<Student>;
      })
    );
  }
  /**
   * Adds a new student
   * @param student undefined
   * @return Created
   */
  createStudent(student?: Student): __Observable<Student> {
    return this.createStudentResponse(student).pipe(
      __map(_r => _r.body as Student)
    );
  }

  /**
   * Returns a student
   * @param studentId undefined
   * @return Success
   */
  getStudentResponse(studentId: number): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<Student>;
      })
    );
  }
  /**
   * Returns a student
   * @param studentId undefined
   * @return Success
   */
  getStudent(studentId: number): __Observable<Student> {
    return this.getStudentResponse(studentId).pipe(
      __map(_r => _r.body as Student)
    );
  }

  /**
   * Modifies a student
   * @param params The `StudentsService.EditStudentParams` containing the following parameters:
   *
   * - `studentId`:
   *
   * - `student`:
   *
   * @return Created
   */
  editStudentResponse(params: StudentsService.EditStudentParams): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.student;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/students/${params.studentId}`,
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
   * Modifies a student
   * @param params The `StudentsService.EditStudentParams` containing the following parameters:
   *
   * - `studentId`:
   *
   * - `student`:
   *
   * @return Created
   */
  editStudent(params: StudentsService.EditStudentParams): __Observable<Student> {
    return this.editStudentResponse(params).pipe(
      __map(_r => _r.body as Student)
    );
  }

  /**
   * Returns a list of course results
   * @param params The `StudentsService.GetResultsParams` containing the following parameters:
   *
   * - `studentId`:
   *
   * - `courseId`:
   *
   * @return Success
   */
  getResultsResponse(params: StudentsService.GetResultsParams): __Observable<__StrictHttpResponse<CourseResultList>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/students/${params.studentId}/courses/${params.courseId}/results`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CourseResultList>;
      })
    );
  }
  /**
   * Returns a list of course results
   * @param params The `StudentsService.GetResultsParams` containing the following parameters:
   *
   * - `studentId`:
   *
   * - `courseId`:
   *
   * @return Success
   */
  getResults(params: StudentsService.GetResultsParams): __Observable<CourseResultList> {
    return this.getResultsResponse(params).pipe(
      __map(_r => _r.body as CourseResultList)
    );
  }

  /**
   * Adds a new student
   * @param params The `StudentsService.CreateResultParams` containing the following parameters:
   *
   * - `studentId`:
   *
   * - `courseId`:
   *
   * - `courseResult`:
   *
   * @return Created
   */
  createResultResponse(params: StudentsService.CreateResultParams): __Observable<__StrictHttpResponse<CourseResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.courseResult;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/students/${params.studentId}/courses/${params.courseId}/results`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CourseResult>;
      })
    );
  }
  /**
   * Adds a new student
   * @param params The `StudentsService.CreateResultParams` containing the following parameters:
   *
   * - `studentId`:
   *
   * - `courseId`:
   *
   * - `courseResult`:
   *
   * @return Created
   */
  createResult(params: StudentsService.CreateResultParams): __Observable<CourseResult> {
    return this.createResultResponse(params).pipe(
      __map(_r => _r.body as CourseResult)
    );
  }
}

module StudentsService {

  /**
   * Parameters for editStudent
   */
  export interface EditStudentParams {
    studentId: number;
    student?: Student;
  }

  /**
   * Parameters for getResults
   */
  export interface GetResultsParams {
    studentId: number;
    courseId: number;
  }

  /**
   * Parameters for createResult
   */
  export interface CreateResultParams {
    studentId: number;
    courseId: number;
    courseResult?: CourseResult;
  }
}

export { StudentsService }
