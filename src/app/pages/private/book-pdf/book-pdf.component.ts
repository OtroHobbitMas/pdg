import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MessageI } from 'src/app/models/MessageI';
import { ChatService } from 'src/app/services/chat.service';
import { FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';
import { AngularEpubViewerComponent, AngularEpubViewerModule } from 'angular-epub-viewer';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-book-pdf',
  templateUrl: './book-pdf.component.html',
  styleUrls: ['./book-pdf.component.scss']
})

export class BookPDFComponent implements OnInit {


  //AQUI EMPIEZA EPUB
  @ViewChild('epubViewer')
  epubViewer: AngularEpubViewerComponent;

  

 
  openFile() {
    // let book = this.epubViewer.epub("https://s3.amazonaws.com/moby-dick/moby-dick.epub");
    // // this.epubViewer.openLink("https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf");
    // // this.epubViewer.openLink("https://drive.google.com/file/d/1OY8EbZlLCbtRkMDcSM0hpSu8-MEjwZbj/view?usp=sharing");
    // this.epubViewer.openFile(book);
    // // this.epubViewer.openLink("")
    this.epubViewer.setStyle("color:","blue");
  }

  


  //AQUÍ ACABA
  
  msgs: Array<MessageI> =[{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50"},{"user":"../../../../../../assets/img/NoImage.png","content":"Adiossss","time":"8:50"},{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50"}];
  msgForm: FormControl;
  subscriptionList: {
    connection: Subscription,
    newMgs: Subscription
  } = {
      connection: undefined,
      newMgs: undefined
  };
  url;
  pag;
  title;


  constructor(public chatService:ChatService, public route: ActivatedRoute ) {
    this.msgForm = new FormControl();
   }

  ngOnInit(): void { 
    this.initChat();

    this.url=this.route.snapshot.paramMap.get("url");
    this.pag=this.route.snapshot.paramMap.get("Pag");
    this.title=this.route.snapshot.paramMap.get("title");    
  

  }

  ngAfterViewInit(){
    // console.log(this);

    this.epubViewer.openLink(this.url);

    // this.epubViewer.openLink("https://firebasestorage.googleapis.com/v0/b/tesisredsocial-be58f.appspot.com/o/books%2FROWLING%20J%20K%20-%2001%20Harry%20Potter%20Y%20La%20Piedra%20Filosofal.epub?alt=media&token=278813d9-edc1-4022-b9a1-be3a50647e07");
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

