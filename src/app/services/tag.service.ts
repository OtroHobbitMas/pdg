import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tagsList:  AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getTags()
  {
    this.tagsList = this.firebase.list('tags');
    return this.tagsList;
  }

  deleteTag(tagkey: string,$key: string)
  {

    this.firebase.database.ref("register").child($key).child("Tags").child(tagkey).remove();
  }

  deleteIntegrant(tagkey: string,$key: string)
  {

    this.firebase.database.ref("register").child($key).child("Groups").child(tagkey).remove();
  }

}
