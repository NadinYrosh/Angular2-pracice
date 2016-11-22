import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:'You are friends with Sasha'},
    {id: 1, text:'Sasha got your message'},
    {id: 2, text:'I cant believe he said that...'}
  ];

  update(id, text){
    this.messages = this.messages
      .map(m => m.id === id ? {id, text} : m
    )
  }
  constructor() { }

}
