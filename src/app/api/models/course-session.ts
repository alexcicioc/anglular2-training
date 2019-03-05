/* tslint:disable */
export interface CourseSession {

  /**
   * Course id
   */
  courseId: number;

  /**
   * Session title
   */
  title: string;

  /**
   * Session date
   */
  date: string;

  /**
   * Session theory
   */
  theory?: string;

  /**
   * Session homework
   */
  homework?: string;
}
