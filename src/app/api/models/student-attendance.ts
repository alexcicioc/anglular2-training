/* tslint:disable */
export interface StudentAttendance {

  /**
   * Student id, reference to students.id
   */
  studentId?: number;

  /**
   * Session id, reference to courseSessions.id
   */
  sessionId?: number;

  /**
   * Has the student attended the session course ?
   */
  attended?: boolean;

  /**
   * Has the student provided the homework for this session?
   */
  hasHomework?: boolean;
}
