import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserI } from '../shared/interfaces/UserI';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getRegister(){
     this.registerList = this.firebase.list('registers');
    return this.registerList;
  }

  deleteFriends(tagkey: string,$key: string)
  {
    console.log("delete $key");
    console.log(tagkey);
    this.firebase.database.ref("registers").child($key).child("Amigos").child(tagkey).remove();
  }

  updateUsername(register: UserI)
  {
    console.log("register.$key");
    console.log(register.$key);
    // this.registerList.update(register.$key, {
    //   name: register.name,
    // });
  }

  insertRegister(register: UserI){

    this.registerList.push({
      email: register.email,
      telefono: register.telefono,
      password: register.password,
      name: register.name,
      lname: register.lname,
      // socketID: register.socketID,      
    });
  }
}
