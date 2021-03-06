import { TagService } from './../../../services/tag.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from "src/app/services/user.service";
import { AngularFireAuth } from '@angular/fire/auth';
import {  FormControl, FormGroup, NgForm, Validators, FormBuilder,} from "@angular/forms";
import * as firebase from 'firebase';
import { Router } from '@angular/router';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { BookService } from 'src/app/services/book.service';
// import { User } from 'src/app/models/user';
import { User } from 'src/app/models/user';
import { Book } from 'src/app/models/book';
import { Group } from 'src/app/models/group';

@Component({   
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  FormAdd = new FormGroup({
    Numbercontact: new FormControl(),
    Namecontact: new FormControl()
  });

  subscriptionList: {
    connection: Subscription,
    msgs: Subscription   
  } = {
      connection: undefined,
      msgs: undefined
  };
  
  searchBoxHome= '';

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


  constructor(public authService: AuthService,
    private tagService: TagService,
    private firebaseAuth:AngularFireAuth, 
    private userService: UserService,
    private bookService: BookService,
    private router: Router,
    private firebase: AngularFireDatabase,
    private toastr: ToastrService,
    private filter: FilterPipe) {}

    registerList: User[];
    bookList: Book[];
    // bookList: any[] = [];
    bookComents: any[] = [];
    bookListRecomended;
    bookTags: any[] = [];
    register= [];
    itemRef: any;
    macthRecomended: any[] = [];
    nameGroup: string;
    groupValue: string;
    booksList: any[] = [];
    booksListGroup: any[] = [];
    tagsList: any[] = [];
    comentario: string;
    arrTagsBooks: any[] = [];
    groupList: any[] = [];
    tag: string;

    ngOnInit(): void {
      // this.initChat();
      let $this = this;
      this.UserAcount();
      this.userService.getRegister()
      .snapshotChanges().subscribe(item => {
        this.registerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.registerList.push(x as User);
        });
        this.getMyGroupsAndBooks(this.registerList);
      });

      this.userService.getGroups()
      .snapshotChanges().subscribe(item => {
        this.groupList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.groupList.push(x as Group);
        });
      });


      this.tagService.getTags()    
      .snapshotChanges().subscribe(item => {
        this.tagsList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.tagsList.push(x as User);
        });
      });
      
      this.bookService.getBooks()
      .snapshotChanges().subscribe(item => {
        this.bookList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.bookList.push(x as Book);
        });
        this.macthRecomended = this.bookList;
        $this.callTags(this.bookList,this.tagsList);
        $this.coments(this.bookList,this.registerList);
      });  
    }

    async callTags(lista,tags){
    let Key;
    let entries;

    const Email = firebase.auth().currentUser.email;
    lista.forEach((element) => {
      if ("Tags" in element){
        entries = Object.values(element.Tags);
        this.arrTagsBooks.push({tags: entries, name: element.Title});
      }
    });
    this.tagsList = Object.values(tags[0]);   
  }

  getBooksByTag(){
    let entries;

    if (this.tag == "All") {
      this.macthRecomended = this.booksList;
    } else {
      this.macthRecomended = [];
      this.bookList.forEach((element,index) => {
        if ("Tags" in element){
          entries = Object.values(element.Tags);
          for (let i = 0; i < entries.length; i++) {
            if (this.tag == entries[i]) {
              this.macthRecomended.push(element);
            }
          }
          
        }
      });      
    }


    if (this.macthRecomended.length == 0){
      this.macthRecomended = this.bookList;
    }

    
  }

  activateSelect(i){
    let activate = document.getElementById("activateGroupSelect"+i);
    activate.style.display = "block";
  }

  async sendComentario(nombreLibro,i){

    const Email = firebase.auth().currentUser.email;

    if(this.comentario != ''){
      let Key;

     await this.bookList.forEach((element,index) => {
        if ("Title" in element){
          if (element.Title == nombreLibro) {
            Key = element.$key;
          }      
        }
      });



      this.firebase.database.ref("books").child(Key).child("Comentarios").push({
        Comment: this.comentario,
        User: Email
      });
      
      this.toastr.success('Comentario enviado', 'Exitosamente');
      this.comentario = "";
      let activateComent = document.getElementById("activateComentInput"+i);
      activateComent.style.display = "none";
    }
  }


  getMyGroupsAndBooks(list){
    let entries;
    let entriesBooks;
    const Email = firebase.auth().currentUser.email;

    list.forEach((element,index) => {
      if (element.email == Email) {
        if ("Groups" in element){
          entries = Object.keys(element.Groups);
          for (let i = 0; i < entries.length; i++) {
            if (element.Groups[entries[i]].category == "owner") {
              this.booksListGroup.push(element.Groups[entries[i]].groupName);
            }
          }        
        }
      }
      
      // if ("MisLibros" in element){
      //   entriesBooks = Object.keys(element.MisLibros);
      //   for (let i = 0; i < entriesBooks.length; i++) {
      //     this.booksListGroup.push(element.MisLibros[entriesBooks[i]].Titulo);
      //   }        
      // }
    });
  }

  activateComent(i){
    let activateComent = document.getElementById("activateComentInput"+i);
    activateComent.style.display = "block";
  }

   async coments(books,register){

    let entries;
    let bookComentLocal = [];
    this.bookComents = [];
    bookComentLocal = this.bookComents;


    await books.forEach((element) => {
        if ("Comentarios" in element){
          entries = Object.keys(element.Comentarios);
          for (let i = 0; i < entries.length; i++) {
            bookComentLocal.push({Comment: element.Comentarios[entries[i]].Comment, User: element.Comentarios[entries[i]].User, Title: element.Title}); 
          }
          
        }      
    });


    await register.forEach((element) => {
      if (bookComentLocal.length != 0) {

        for (let i = 0; i < bookComentLocal.length; i++) {

          if (bookComentLocal[i].User== element.email){
            if ("Images" in element){            
              entries = Object.keys(element.Images);
              let index = entries.length-1;
              bookComentLocal[i].Images = element.Images[entries[index]].ImgUrl;
              bookComentLocal[i].name = element.name + " " + element.lname;
            } else {
              bookComentLocal[i].Images = "../../../../../../assets/img/NoImage.png";
              bookComentLocal[i].name = element.name + " " + element.lname;
            }
          }  
        }  
      }       
    });

      
    }

      UserAcount (){
      // var user = this.firebaseAuth.auth.currentUser;
      
      let $this = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
  
          // User is signed in.
          
          if (user != null) {
            user.providerData.forEach(function (profile) {

              // $this.addBookToUser(profile.email,"");
            });
          }
        } else {
          // No user is signed in.
        }
      });
    }


  async  doLogout() {
    await this.authService.logout();
    this.router.navigate(['/']);
  }

  imagen: any;
  titulo: any;
  autor: any;
  confirm: any = false;
  contador: number= 0;
  arr: any[] = [];

  ngFormLibro = new FormGroup({
    imagen: new FormControl(),
    titulo: new FormControl(),
    autor: new FormControl(),      
  });

  async addBookToUser(i){
    let Key;
    let alink;

    const Email = firebase.auth().currentUser.email;
      this.imagen = this.macthRecomended[i].Portada;
      this.titulo = this.macthRecomended[i].Title;
      this.autor = this.macthRecomended[i].Autor;
      alink = this.macthRecomended[i].alink;

      await this.firebase.database.ref("register").once("value", (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == Email) {
            Key = childKey;
            user.forEach((info) => {
              info.forEach((MisLibros) => {
                MisLibros.forEach((Libros) => {
                  const LibrosChildKey = Libros.key;
                  const LibrosChildData = Libros.val();
                if (LibrosChildKey == "Titulo"){
                  if (LibrosChildData == this.titulo){
                    this.arr.push(LibrosChildData);
                  }
                }
                });
                
              });
            });
          }        
        });
      });
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i]==this.titulo){
          this.contador ++;
        }        
      }
      if (this.contador==0){
        this.confirm = true;
      } else {
        this.toastr.error('El libro ya se encuentra en tu lista', 'Fallido');
      }
      if (this.confirm == true){
        this.firebase.database.ref("register").child(Key).child("MisLibros").push({
          Imagen: this.imagen,
          Titulo: this.titulo,
          Autor: this.autor,
          alink: alink,
          Pag: 1
        });
        this.toastr.success('Libro a??adido a tu lista', 'Exitosamente');
      }

    this.contador = 0;
    this.confirm = false;
    this.arr = [];  
  }

  goToPerfil(email){
    this.router.navigate(['externalProfiles',{email: email}]);
  }
  
  async addBookToGroup(i){
    let alink;
    let keygroup;
    let booksinGroup: any[] = [];
    let entries;
    let contador = 0;
    let activate = document.getElementById("activateGroupSelect"+i);
    activate.style.display = "none";
    
    this.titulo = this.macthRecomended[i].Title;
    this.imagen = this.macthRecomended[i].Portada;
    this.autor = this.macthRecomended[i].Autor;
    alink = this.macthRecomended[i].alink;
    

    await this.firebase.database.ref("groups").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.name == this.groupValue) {
          keygroup = childKey;
        }        
      });
    });
    
    this.groupList.forEach((element) => {

      if (element.name == this.groupValue) {
        if ("books" in element){
          entries = Object.keys(element.books);
          for (let i = 0; i < entries.length; i++) {
            booksinGroup.push(element.books[entries[i]].Titulo);     
          }
             
        }
      } 
    });

    if (booksinGroup.length == 0) {
      this.firebase.database.ref("groups").child(keygroup).child("books").push({
        Autor: this.autor,
        Imagen: this.imagen,
        Titulo: this.titulo,
        alink: alink,
        Pag: 1
      });
      booksinGroup.push(this.titulo);
      this.toastr.success('Libro a??adido a tu grupo', 'Exitosamente');
    }

    for (let i = 0; i < booksinGroup.length; i++) {
      if (this.titulo == booksinGroup[i]){
        contador ++;
      }
    }

    if (contador == 0) {

      this.firebase.database.ref("groups").child(keygroup).child("books").push({
        Autor: this.autor,
        Imagen: this.imagen,
        Titulo: this.titulo,
        alink: alink,
        Pag: 1
      });
      booksinGroup.push(this.titulo);
      this.toastr.success('Libro a??adido a tu grupo', 'Exitosamente');

    } else { 
      this.toastr.error('El libro ya se encuentra en el grupo');
    }
    this.groupValue = "";
  }
  
  async SendContact() {
    
    let Key;
    const ContactName = this.FormAdd.controls.Namecontact.value;
    let ContactNumber = this.FormAdd.controls.Numbercontact.value;
    const Email = firebase.auth().currentUser.email;
    let emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    let userExist;

    await this.firebase.database.ref('register').once('value', users => {
      users.forEach(user => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
        }
      });
    });

    if (ContactNumber.match(emailRegexp)) {
      // Es correo
      userExist = this.registerList.find(user => user.email == ContactNumber);
      ContactNumber = userExist && userExist.email || undefined;
      if (!userExist) {
      } else {
        this.firebase.database.ref('register').child(Key).child('contacts').push({
          Namecontact: ContactName,
          Numbercontact: ContactNumber,
        });
      }
    } else {
      // Es tel??fono
      userExist = this.registerList.find(user => user.telefono.e164Number == ContactNumber && user);
      if (!userExist) {
      } else {
        this.firebase.database.ref('register').child(Key).child('contacts').push({
          Namecontact: ContactName,
          Numbercontact: ContactNumber,
        });
      }
    } 

    this.FormAdd.reset({
      Namecontact: "",
      Numbercontact: "",
    });
  }



}
