import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MessageI } from 'src/app/models/MessageI';
import { pageChange } from 'src/app/models/pageChange';
import { ChatService } from 'src/app/services/chat.service';
import { FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';
import { AngularEpubViewerComponent, AngularEpubViewerModule } from 'angular-epub-viewer';
import {ActivatedRoute} from '@angular/router';
import * as firebase from "firebase";
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from 'src/app/services/user.service';




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
  
  msgs: Array<MessageI> =[{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50","book":"Harry Potter y la  Piedra Filosofal","group":"hola123"},{"user":"../../../../../../assets/img/NoImage.png","content":"Holaaaa","time":"8:50","book":"Hp","group":"hola123"},{"user":"../../../../../../assets/img/NoImage.png","content":"Adiossss","time":"8:50","book":"HA","group":"hola123"}];
  msgForm: FormControl;
  subscriptionList: {
    connection: Subscription,
    newMgs: Subscription,
    pageUpdate: Subscription
  } = {
      connection: undefined,
      newMgs: undefined,
      pageUpdate: undefined
  };
  url;
  pag;
  title;
  group;
  isGroup=false;


    constructor(public chatService:ChatService, public route: ActivatedRoute, private firebase: AngularFireDatabase, 
      public userService : UserService) {
    this.msgForm = new FormControl();
   }

  ngOnInit(): void { 

    this.url=this.route.snapshot.paramMap.get("url");
    this.pag=this.route.snapshot.paramMap.get("Pag");
    this.title=this.route.snapshot.paramMap.get("title");    
    this.group=this.route.snapshot.paramMap.get("group");
    if(this.group!=""){
      this.isGroup=true;
      this.initChat();
    }


  }

  ngAfterViewInit(){
    // console.log(this);

    this.epubViewer.openLink(this.url);

    // this.epubViewer.openLink("https://firebasestorage.googleapis.com/v0/b/tesisredsocial-be58f.appspot.com/o/books%2FROWLING%20J%20K%20-%2001%20Harry%20Potter%20Y%20La%20Piedra%20Filosofal.epub?alt=media&token=278813d9-edc1-4022-b9a1-be3a50647e07");

   

  }

 

  showFiller = false;
  
  public name: string = "Harry Potter y la Piedra Filosofal"; 


  initChat() {
    this.subscriptionList.connection = this.chatService.connect().subscribe(_ => {
      console.log("Nos conectamos");
      this.subscriptionList.newMgs = this.chatService.getNewMsgs().subscribe((msg: MessageI) => {
        
        if(msg.group==this.group && msg.book==this.title){
          this.msgs.push(msg);
        }
      });
      this.subscriptionList.pageUpdate = this.chatService.getChangePage().subscribe((info: pageChange) =>{
        if(info.group==this.group && info.book==this.title){
          if(info.page == "Next") this.epubViewer.nextPage()
          else if(info.page == "Previous") this.epubViewer.previousPage()
        }
      })
    });
  }
  nextPage(){
    this.chatService.sendpageChange({group: this.group,book:this.title,page:"Next"})
    this.epubViewer.nextPage()
  }
  previousPage(){
    this.chatService.sendpageChange({group: this.group,book:this.title,page:"Previous"})
    this.epubViewer.previousPage()
  }
  async sendMsg() {
    // console.log(firebase.auth().currentUser);
    let img= ""
    await this.userService.getUserImg(firebase.auth().currentUser.email).then(value =>{
      img = value 
    });

    const msg: MessageI = {
      content: this.msgForm.value,
      time: Date.now().toString(),
      user: img == "" ? "../../../../../../assets/img/NoImage.png" : img,
      group: this.group,
      book:this.title 
    }
    this.chatService.sendMsg(msg);
    this.msgForm.setValue("");
  }
}

