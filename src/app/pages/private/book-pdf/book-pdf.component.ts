import { Component, OnInit, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MessageI } from 'src/app/models/MessageI';
import { ChatService } from 'src/app/services/chat.service';
import { FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-pdf',
  templateUrl: './book-pdf.component.html',
  styleUrls: ['./book-pdf.component.scss']
})

export class BookPDFComponent implements OnInit {
  
  msgs: Array<MessageI> =[{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50"},{"user":"../../../../../../assets/img/NoImage.png","content":"Adiossss","time":"8:50"},{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50"}];
  msgForm: FormControl;
  subscriptionList: {
    connection: Subscription,
    newMgs: Subscription
  } = {
      connection: undefined,
      newMgs: undefined
  };

  constructor(public chatService:ChatService) {
    this.msgForm = new FormControl();
   }

  ngOnInit(): void { 
    this.initChat();
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

  initChat() {
    this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
      console.log("Nos conectamos");
      this.subscriptionList.newMgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
        this.msgs.push(msg);
      });
    });
  }

  sendMsg() {
    const msg: MessageI = {
      content: this.msgForm.value,
      time: Date.now().toString(),
      user: "../../../../../../assets/img/NoImage.png"
    }
    this.chatService.sendMsg(msg);
    this.msgForm.setValue("");
  }
}

