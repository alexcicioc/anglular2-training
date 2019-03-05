import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable()
export class EventService {
  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);

    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    title: 'JavaScript - Building the game "Dungeon Explorer"',
    date: new Date('9/26/2036'),
    imageUrl: 'https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/52835900_2689465901083348_8144569654753361920_o.jpg?_nc_cat=106&_nc_ht=scontent.fomr1-1.fna&oh=c54e66016ce70276fa86b108eec89c09&oe=5D14A56F',
    location: 'Baia Mare',
  },
  {
    id: 2,
    title: 'JavaScript - Building the game "Dungeon Explorer"',
    date: new Date('9/26/2036'),
    imageUrl: 'https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/52835900_2689465901083348_8144569654753361920_o.jpg?_nc_cat=106&_nc_ht=scontent.fomr1-1.fna&oh=c54e66016ce70276fa86b108eec89c09&oe=5D14A56F',
    location: 'Baia Mare',
  },
];