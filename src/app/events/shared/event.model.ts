export interface IEvent {
  id: number;
  title: string;
  date: Date;
  imageUrl: string;
  location: string;
}

export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}
