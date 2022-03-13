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

  
  searchBoxHome= '';

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


  constructor(public authService: AuthService,
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
    groupList: any[] = [];
    booksList: any[] = [];
    activate = false;
    activateComentD = false;
    comentario: string;

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
      
      this.bookService.getBooks()
      .snapshotChanges().subscribe(item => {
        this.bookList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.bookList.push(x as Book);
        });
        $this.getBooksByTag(this.bookList);
        $this.coments(this.bookList,this.registerList);
      });
      
    }

    async getBooksByTag(lista)
  {
    let Key;
    let arr = [];
    let tagsLibros;
    // console.log("lista");
    // console.log(lista);

    const Email = firebase.auth().currentUser.email;

    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        // console.log("entre nivel1");
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
          user.forEach((info) => {
            info.forEach((MisTags) => {
              MisTags.forEach((Tags) => {
                const TagsChildKey = Tags.key;
                const TagsChildData = Tags.val();
                // console.log("TagsChildKey:" + TagsChildKey);
                // console.log("TagsChildData:" + TagsChildData);
              if (TagsChildKey == "Tag"){
                
                arr.push(TagsChildData);
                
              }
              });
              
            });
          });
        }        
      });
    });
    console.log(arr);
    
    for (let i = 0; i < lista.length; i++) {
      tagsLibros = Object.values(lista[i].Tags);
      for (let j = 0; j < arr.length; j++) {
        
        for (let k = 0; k < tagsLibros.length; k++) {
          if (tagsLibros[k] == arr[j]){
            this.macthRecomended.push(lista[i]);            
          }          
        }
        
        
      }
      
    }

    if (this.macthRecomended.length == 0){
      this.macthRecomended = lista;
    }


  }

  activateSelect(){
    this.activate = true;
  }

  async sendComentario(nombreLibro){

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

      console.log("Key");
      console.log(Key);

      this.firebase.database.ref("books").child(Key).child("Comentarios").push({
        Comment: this.comentario,
        User: Email
      });
      
      this.toastr.success('Comentario enviado', 'Exitosamente');
    }
  }


  getMyGroupsAndBooks(list){
    let entries;
    let entriesBooks;

    list.forEach((element,index) => {
      if ("Groups" in element){
        entries = Object.keys(element.Groups);
        for (let i = 0; i < entries.length; i++) {
          if (element.Groups[entries[i]].category == "owner") {
            this.groupList.push(element.Groups[entries[i]].groupName);
          }
        }        
      }
      if ("MisLibros" in element){
        entriesBooks = Object.keys(element.MisLibros);
        for (let i = 0; i < entriesBooks.length; i++) {
          this.booksList.push(element.MisLibros[entriesBooks[i]].Titulo);
        }        
      }
    });
  }

  activateComent(){
    this.activateComentD = true;
  }

   async coments(books,register){

    let contador = 0;
    let entries;

    await books.forEach((element) => {
        if ("Comentarios" in element){
          entries = Object.keys(element.Comentarios);
          for (let i = 0; i < entries.length; i++) {
            this.bookComents.push({Comment: element.Comentarios[entries[i]].Comment, User: element.Comentarios[entries[i]].User, Title: element.Title}); 
          }
          
        }      
    });
    

    await register.forEach((element) => {
      if (this.bookComents[contador]) {
        if (this.bookComents[contador].User== element.email){
          if ("Images" in element){            
            entries = Object.keys(element.Images);
            let index = entries.length-1;
            console.log("element.name");
            console.log(element.name);
            this.bookComents[contador].Images = element.Images[entries[index]].ImgUrl;
            this.bookComents[contador].name = element.name + " " + element.lname;
            contador ++;
          } else {
            console.log("element.name");
            console.log(element.name);
            this.bookComents[contador].Images = "../../../../../../assets/img/NoImage.png";
            this.bookComents[contador].name = element.name + " " + element.lname;
            contador ++;
          }
        } 
      }       
    });
    contador = 0;
    console.log("this.bookComents");
    console.log(this.bookComents);
      
    }

      UserAcount (){
      // var user = this.firebaseAuth.auth.currentUser;
      
      let $this = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
  
          // User is signed in.
          
          if (user != null) {
            user.providerData.forEach(function (profile) {
              // console.log("Sign-in provider: " + profile.providerId);
              // console.log("  Provider-specific UID: " + profile.uid);
              // console.log("  Name: " + profile.displayName);
              // console.log("  Email: " + profile.email);
              // $this.addBookToUser(profile.email,"");
            });
          }
          // console.log(user);
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
    let index = i.split("-");

    const Email = firebase.auth().currentUser.email;
      let imgText = "imagen";
      this.imagen = document.querySelector('#'+imgText+index[1]);         
      this.imagen = this.imagen.src;  

      let titText = "titulo";
      this.titulo = document.querySelector('#'+titText+index[1]);      
      this.titulo = this.titulo.textContent;

      let autorText = "autor";
      this.autor = document.querySelector('#'+autorText+index[1]);      
      this.autor = this.autor.textContent;

      await this.firebase.database.ref("register").once("value", (users) => {
        users.forEach((user) => {
          // console.log("entre nivel1");
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
        });
        this.toastr.success('Libro añadido a tu lista', 'Exitosamente');
      }

    this.contador = 0;
    this.confirm = false;
    this.arr = [];  
  }
  
  async addBookToGroup(i){
    let keygroup;
    let index = i.split("-");
    let imgText = "imagen";
    this.imagen = document.querySelector('#'+imgText+index[1]);         
    this.imagen = this.imagen.src;  

    let titText = "titulo";
    this.titulo = document.querySelector('#'+titText+index[1]);      
    this.titulo = this.titulo.textContent;

    let autorText = "autor";
    this.autor = document.querySelector('#'+autorText+index[1]);      
    this.autor = this.autor.textContent;

    await this.firebase.database.ref("groups").once("value", (users) => {
      users.forEach((user) => {
        // console.log("entre nivel1");
        const childKey = user.key;
        const childData = user.val();
        if (childData.name == this.groupList[index[1]]) {
          keygroup = childKey;
        }        
      });
    });
    if (keygroup) {
      this.firebase.database.ref("groups").child(keygroup).child("books").push({
        Autor: this.autor,
        Imagen: this.imagen,
        Titulo: this.titulo
      });
      this.toastr.success('Libro añadido a tu grupo', 'Exitosamente');
    }   
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
          // console.log("entramos", childKey);
        }
        // console.log("recorrido", childKey);
      });
    });

    if (ContactNumber.match(emailRegexp)) {
      // Es correo
      // console.log("Es correo");
      userExist = this.registerList.find(user => user.email == ContactNumber);
      ContactNumber = userExist && userExist.email || undefined;
      if (!userExist) {
        // console.log("Este usuario no existe")
      } else {
        // console.log(ContactName, ContactNumber);
        this.firebase.database.ref('register').child(Key).child('contacts').push({
          Namecontact: ContactName,
          Numbercontact: ContactNumber,
        });
      }
    } else {
      // console.log("Es teléfono");
      // Es teléfono
      userExist = this.registerList.find(user => user.telefono.e164Number == ContactNumber && user);
      if (!userExist) {
        // console.log("Este usuario no existe")
      } else {
        // console.log(ContactName, ContactNumber);
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
