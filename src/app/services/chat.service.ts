import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from '../models/MessageI';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  socket: any;

  constructor() { }

  connect() {
    return new Observable(observer => {
      this.socket = io('localhost:3000');
      this.socket.on('connect', () => {
        observer.next();
      })
    })
  }

  getNewMsgs() {
    return new Observable(observer => {
      this.socket.on("newMsg", msg => {
        observer.next(msg);
      });
    });
  }

  sendMsg(msg: MessageI) {
    this.socket.emit('newMsg', msg);
  }

  disconnect() {
    this.socket.disconnect();
  }

}