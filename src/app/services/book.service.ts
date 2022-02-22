import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList:  AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getBooks()
  {
    this.bookList = this.firebase.list('books');
    return this.bookList;
  }

  

  deleteBooks(tagkey: string,$key: string)
  {
    console.log("delete $key");
    console.log(tagkey);
    this.firebase.database.ref("register").child($key).child("MisLibros").child(tagkey).remove();
  }

}
