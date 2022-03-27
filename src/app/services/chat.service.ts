import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from '../models/MessageI';
import { pageChange } from 'src/app/models/pageChange';
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
      this.socket = io('https://4c7d-186-168-128-4.ngrok.io',{ transports: ['websocket'] }); 
      //AQUI CAMBIO LA IP V4 https://c6e7-186-170-64-187.ngrok.io
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
  getChangePage() {
    return new Observable(observer => {
      this.socket.on("pageChange", info => {
        observer.next(info);
      });
    });
  }

  sendMsg(msg: MessageI) {
    // console.log(msg)
    this.socket.emit('newMsg', msg);
  }
  sendpageChange(info: pageChange){
    // console.log("Service",info)
    this.socket.emit("pageChange",info)
  }

  disconnect() {
    this.socket.disconnect();
  }

}