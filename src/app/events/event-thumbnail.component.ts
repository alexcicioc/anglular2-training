import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  .green { color: #003300 !important;}
  .bold { font-weight:bold !important;}
  `]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
