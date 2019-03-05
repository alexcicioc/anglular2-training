/* tslint:disable */
export interface CourseResult {

  /**
   * Course id
   */
  courseId?: number;

  /**
   * Student id, reference to students.id
   */
  studentId?: number;

  /**
   * Theory grade
   */
  gradeTheory?: number;

  /**
   * Practice grade
   */
  gradePractice?: number;

  /**
   * Final grade
   */
  gradeFinal?: number;

  /**
   * Google drive url
   */
  driveLink?: string;

  /**
   * Observations
   */
  observations?: string;
  recomended?: boolean;
  createdOn?: string;
  englishLevel?: 'poor' | 'needs-improvement' | 'average' | 'good' | 'very-good';
}
