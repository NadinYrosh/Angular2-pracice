import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'You are friends with Sasha',
    'Sasha got your message',
    'I cant believe he said that...'
  ];
  constructor() { }

}
