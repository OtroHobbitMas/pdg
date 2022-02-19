import { Component, OnInit, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MessageI } from 'src/app/models/MessageI';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-book-pdf',
  templateUrl: './book-pdf.component.html',
  styleUrls: ['./book-pdf.component.scss']
})

export class BookPDFComponent implements OnInit {
  
  @Input() msgs: Array<MessageI> =[{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50"},{"user":"../../../../../../assets/img/NoImage.png","content":"Adiossss","time":"8:50"},{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50"}];
  msg: string;

  constructor(public chatService:ChatService) {
    
   }

  ngOnInit(): void { 
  }

  showFiller = false;
  
  public name: string = "Harry Potter y la Piedra Filosofal"; 

  // pdfSrc = "https://drive.google.com/file/d/1jq3wKpEloUZlT3PjqSn0GGhfuytXJbhD/view?usp=sharing";
  pdfSrc="../../../../assets/HarryPotter-PiedraFilosofal.pdf";

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  pageInitialized(e: CustomEvent) {
    console.log('(pages-initialized:)', e);
  }

  onProgress(progressData) {
    console.log('(progress)', progressData); // do anything with progress data. For example progress indicator
  }
  sendMsg() {
    const msg: MessageI = {
      content: this.msg,
      time: "8:58",
      user: ""
    }
    this.chatService.sendMsg(msg);
    this.msg = "";
  }
}

