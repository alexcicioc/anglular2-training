/* tslint:disable */
export interface Course {

  /**
   * Course title
   */
  title: string;

  /**
   * Course technology
   */
  technology: string;

  /**
   * Course start date
   */
  startDate?: string;

  /**
   * Visibility flag
   */
  visible?: boolean;

  /**
   * The total number of sessions
   */
  totalSessions?: number;

  /**
   * Event image url
   */
  imageUrl?: string;

  /**
   * Course location
   */
  location?: string;
}
