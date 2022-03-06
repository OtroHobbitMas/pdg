import { Component, Input, OnInit } from '@angular/core';
import { MessageI } from 'src/app/models/MessageI';

@Component({
  selector: 'app-book-chat',
  templateUrl: './book-chat.component.html',
  styleUrls: ['./book-chat.component.scss']
})
export class BookChatComponent implements OnInit {
  @Input() msg: MessageI
  constructor() { }

  ngOnInit(): void {
  }

}
