import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Group } from '../models/group';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerList: AngularFireList<any>;
  groupsList: AngularFireList<any>;
  private collection: string;
  private subCollectionPhone: string;

  constructor(private firebase: AngularFireDatabase) { 
    this.collection= 'register';
    this.subCollectionPhone= "telefono";
  }

  async getUserImg(email:string){
    let image = ""
    await this.firebase.database.ref(this.collection).orderByChild('email').equalTo(email).limitToLast(1).once("value", (user) =>{
    user = user.val()
    let Images = user[Object.keys(user)[0]].Images;
    image = Images[Object.keys(Images)[-1]].ImgUrl;    
    } )
    return image
  }

  getRegister(){
     this.registerList = this.firebase.list(this.collection);
     
    return this.registerList;
  }

  getGroups(){
    this.groupsList = this.firebase.list('groups');
     
    return this.groupsList;
  }

  public findById(email: string) {
    
    const ref = this.firebase.database.ref(this.collection);
  
    return ref.orderByChild('email').equalTo(email).limitToLast(1);
  }

  public findByPhone(numero: string) {
    const ref = this.firebase.database.ref(this.collection);
    
    return ref.orderByChild(this.subCollectionPhone+'/e164Number').equalTo('+57'+numero).limitToLast(1);
  }


  deleteFriends(tagkey: string,$key: string)
  {
    console.log("delete $key");
    console.log(tagkey);
    this.firebase.database.ref(this.collection).child($key).child("friends").child(tagkey).remove();
  }

  updateUsername(user: User)
  {
    console.log("user.$key");
    console.log(user.$key);
    // this.registerList.update(register.$key, {
    //   name: register.name,
    // });
  }

  insertRegister(user: User){

    // this.firebase.object(this.collection).set({...user});

    this.firebase.list('register').push({
      email: user.email,
      telefono: user.telefono,
      password: user.password,
      name: user.name,
      lname: user.lname
    });

  }

  createGroup(group: Group){
    this.firebase.list('groups').push({
      owner: group.owner,
      name: group.name,
      description: group.description,
      privacity: group.privacity,
      tags: group.tags,
    });
  }

}
