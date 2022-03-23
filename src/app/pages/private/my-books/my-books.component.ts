import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import * as firebase from "firebase";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  constructor( private router:Router, private _config: NgbCarouselConfig, public authService: AuthService, private firebase: AngularFireDatabase) { 

  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    setTimeout(() => {this.getMisLibros();
      
  
    }, 500);
    

  }

  goToBook(i: string) {
    // console.log(this.misLibrosList[i]);
    // console.log(this.misLibrosList[i].link);
    this.router.navigate(['/book',{Pag: this.misLibrosList[i].Pag, title: this.misLibrosList[i].Titulo,url: this.misLibrosList[i].alink,group:""}]);
  }


  misLibrosList: any[] = [];

  async getMisLibros() {
    console.log("USER",firebase.auth().currentUser);
    const Email = firebase.auth().currentUser.email;
    console.log("EMAIL",Email);

    await this.firebase.database.ref("register").once("value", (users) => {
      let usersData = users.val();
      let user;
      Object.keys(usersData).forEach((key) => {
        if (usersData[key].email == Email) {
          user = usersData[key];
        }
      });
      if (user.MisLibros) {
        Object.keys(user.MisLibros).forEach((key) => {
          this.misLibrosList.push(user.MisLibros[key]);
        });
      }  
    });
    console.log("MIS LIBROS",this.misLibrosList);
  }

}
