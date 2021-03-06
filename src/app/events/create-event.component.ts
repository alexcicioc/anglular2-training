import { Component } from '@angular/core';

@Component({
  template: `
    <h1>New event</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Create event form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button [routerLink]="['/events']" type="button" class="btn btn-default">Cancel</button>
    </div>
  `
})

export class CreateEventComponent {
  isDirty = true;
}
