import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from '../models/MessageI';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  socket: any;

  constructor() { }

  connect() {
    return new Observable(observer => {
      // this.socket = io('http://192.168.0.23:3000');
      this.socket = io('http://192.168.1.56:3000',{ transports: ['websocket'] });
      this.socket.on('connect', () => {
        this.socket.emit("connected");
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
    console.log(msg)
    this.socket.emit('newMsg', msg);
  }

  disconnect() {
    this.socket.disconnect();
  }

}