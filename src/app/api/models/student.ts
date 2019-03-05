/* tslint:disable */
export interface Student {

  /**
   * Referral
   */
  referral?: string;

  /**
   * Student first name
   */
  firstName: string;

  /**
   * Student email. used for login
   */
  email: string;

  /**
   * Login password
   */
  password: string;

  /**
   * Student phone
   */
  phone: string;

  /**
   * Current occupation
   */
  currentOccupation?: string;

  /**
   * Student last name
   */
  lastName: string;

  /**
   * Hire availability
   */
  availableForHire?: boolean;

  /**
   * Student laptop ownership
   */
  hasLaptop?: boolean;

  /**
   * Is the student banned ?
   */
  banned?: boolean;

  /**
   * Has the student previously attended the courses
   */
  previouslyAttended?: boolean;

  /**
   * Motivation
   */
  motivation?: string;
}
