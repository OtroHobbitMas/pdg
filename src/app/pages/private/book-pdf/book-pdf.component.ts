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

  @ViewChild('epubViewer')
  epubViewer: AngularEpubViewerComponent;

  msgs: Array<MessageI> =[];
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
  public name: string 

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
    this.name = this.title; 

  }

  ngAfterViewInit(){
    this.epubViewer.openLink(this.url);
  } 

  showFiller = false;

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
          else if(info.page == "Continue") this.epubViewer.goTo(info.pageNum);
          // else if (info.page == "Continue") this.epubViewer.goTo(5); AIUDA
        }
      })
    });
  }


  nextPage(){
    const pageInfo: pageChange = {group: this.group,book:this.title,page:"Next"}

    this.savePage(1);
    
    if(this.group!=""){
      this.chatService.sendpageChange(pageInfo)
    }else{
      this.epubViewer.nextPage()

    }
  }


  previousPage(){

    this.savePage(-1);

    const pageInfo: pageChange = {group: this.group,book:this.title,page:"Previous"}
    if(this.group!=""){
      this.chatService.sendpageChange(pageInfo)
    }else{
      this.epubViewer.previousPage()

    }
  }

  continuePage(){
    const pageInfo: pageChange = {group: this.group,book:this.title,page:"Continue",pageNum: this.pag}

    if(this.group!=""){
      this.chatService.sendpageChange(pageInfo)
    }else{
      this.epubViewer.goTo(this.pag);

    }

    
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

  async savePage (pag: number) {

    if(this.isGroup==false){
      const email= firebase.auth().currentUser.email;
      const ref = this.firebase.database.ref('register');
  
      ref.orderByChild('email').equalTo(email).limitToLast(1).once("value", (user) =>{
  
          console.log(user.val()); 
          user=user.val();
          let userKey=Object.keys(user);
          console.log(userKey);
          let books = user[Object.keys(user)[0]].MisLibros;
          let bookKeys = Object.keys(books);
        
  
        bookKeys.forEach(element => {
          
            if(books[element].Titulo==this.title){
              console.log(books[element].Titulo);
    
              let currentpage = books[element].Pag;
              this.firebase.database.ref("register").child(userKey[0]).child("MisLibros").child(element).child("Pag").set(currentpage+pag);
    
            }
                  
        });
      
      });
    }else{
      const ref = this.firebase.database.ref('groups');
      ref.orderByChild('name').equalTo(this.group).limitToLast(1).once("value", (group) =>{
  
        group=group.val();
        let groupKey=Object.keys(group);
        let books = group[Object.keys(group)[0]].books;
        let bookKeys = Object.keys(books);

      bookKeys.forEach(element => {
        
          if(books[element].Titulo==this.title){
  
            let currentpage = books[element].Pag;
            this.firebase.database.ref("groups").child(groupKey[0]).child("books").child(element).child("Pag").set(currentpage+pag);
  
          }
                
      });
    
    });
    }
  }

  btnDisplay(){
    document.getElementById("BtnContinue").style.display="none";
  }
}

