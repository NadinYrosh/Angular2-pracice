import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `<div>
  {{message}}
  <br>
    <input #myInput type="text" [(ngModel)]="message">
    <button (click)="onClick($event, myInput.value)">Confirm</button>
  </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

@Input() message;

  onClick(event, value) {
    console.log(event);
    console.log(value);

  }
  constructor() { }

  ngOnInit() {
  }

}
