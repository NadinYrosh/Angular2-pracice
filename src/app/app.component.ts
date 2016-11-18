import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <app-simple-form></app-simple-form>

    {{mail.messege}}
  </div>
  `

})
export class AppComponent {
  title = 'Lets learn more!';

  constructor(private mail:MailService){}
}
