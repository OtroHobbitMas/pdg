import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from "firebase";
import { Group } from "src/app/models/group";
import { TagService } from 'src/app/services/tag.service';
import { User } from 'src/app/models/user';
import {ActivatedRoute} from '@angular/router';
import { cpuUsage } from "process";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  fileUrl: string;
  ImgUrl:  string;
  ImgGUrl:  string;
  Currentimg = "../../../../../../assets/img/NoImage.png";
  registerList: User[];
  groupList: Group[];
  amigosList: any[] = [];
  amigosEmails: any[] = [];
  tagsList: any[] = [];
  owner: string;
  searchBoxExternal= '';
  selectedGroup: any[] = [];
  selectedIntegrants: any[] = []; 
  selectedTags: any[] = [];
  permisoVisual = true;
  permisoAdd = true;
  permisoAdmin = true;
  nameOwner: string;
  userName: string;
  myGroups: any[] = [];
  librosGrupo: any[] = [];
  name;
  openedGruop:string="";
  desaparecerBoton = true;
  descripcion = "";

  constructor(
    private tagService: TagService,
    private firebase: AngularFireDatabase,
    private toastr: ToastrService,
    private userService: UserService,
    public route: ActivatedRoute,
    private router: Router,) { }

  viewCreateGroup = false;
  firstPage = true;
  viewsearchGroup = false;
  nextImage = false;
  viewInsideGroup = false;

  ngOnInit(): void {
    let $this = this;
    
    this.tagService.getTags()    
      .snapshotChanges().subscribe(item => {
        this.tagsList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.tagsList.push(x as User);          
        });
        this.tagsList = Object.values(this.tagsList[0]);
    });

    this.userService.getGroups()
      .snapshotChanges().subscribe(item => {
        this.groupList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.groupList.push(x as Group);
        });
        this.archieveGroups(this.groupList);
        this.getImgGroups();
      });

      this.userService.getRegister()
      .snapshotChanges().subscribe(item => {
        this.registerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.registerList.push(x as User);
        });
        this.getMygroups();
        this.getAmigos();
      });
      setTimeout(function () { 
        $this.name=$this.route.snapshot.paramMap.get("name");
        if ($this.name) {
          $this.viewExternalGroup($this.name);          
        }        
        }, 1000);
      
  }
  

  ngForm = new FormGroup({
    owner: new FormControl(),
    photoimg: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    integrants: new FormControl(),    
    privacity: new FormControl(),
    tags: new FormControl(),
  });

  getUrl(event){
    this.fileUrl = event;
  }

  async getImg(event){
    this.ImgUrl = event;
   await this.SendImage();
   await this.UpdatePerfilPhoto();
  //  await this.UpdatePerfilPhoto(Email);
  }
  
  createGroup(){
    this.firstPage = false;
    this.viewCreateGroup = true;
    this.ngForm.reset();
  }

  searchGroupF(){
    this.viewsearchGroup = true;
    this.firstPage = false;
    this.nextImage = false;
  }

  goBack(){
    this.firstPage = true;
    this.viewsearchGroup = false;
    this.viewCreateGroup = false;
    this.nextImage = false;
    this.viewsearchGroup = false;
    this.viewInsideGroup = false;
  }
  
  getMygroups (){
    let entries;
    this.owner = firebase.auth().currentUser.email;

    this.registerList.forEach((element,index) => {
      if (element.email == this.owner) {
        if ("Groups" in element){
          entries = Object.keys(element.Groups);
          for (let i = 0; i < entries.length; i++) {
            this.myGroups.push({name: element.Groups[entries[i]].groupName});          
          }
        }
      }      
    });

    if (this.groupList) {
      this.groupList.forEach((element,index) => {
        
        for (let i = 0; i < this.myGroups.length; i++) {
          if (this.myGroups[i].name == element.name){
            if ("Images" in element){
              entries = Object.keys(element.Images);
              this.myGroups[i].Images = element.Images;
            }else {
              this.myGroups[i].Images = "../../../../../../assets/img/NoImage.png";
            }
            this.myGroups[i].description = element.description;
          } 
        }  
      });
      
    }

  }

  

  archieveGroups(arr){
    this.groupList = arr;
  }

  getImgGroups(){
    let entries;

    this.groupList.forEach((element,index) => {
      if ("Images" in element){
        entries = Object.keys(element.Images);
        this.groupList[index].Images = element.Images[entries[0]].ImgUrl;
      } else {
        this.groupList[index].Images = "../../../../../../assets/img/NoImage.png";
      }
    });
  }

  SendDescription(nombreGrupo){
    let groupKey;
    
    console.log("this.descripcion");
    console.log(this.descripcion);

    this.groupList.forEach((element) => {
      if (element.name == nombreGrupo) {
        groupKey = element.$key;
        console.log("groupKey");
        console.log(groupKey); 
      }
    });

    this.userService.updateDescripcionGroup(
      groupKey,
      this.descripcion
    );

    this.toastr.success('Descripcion actualizada', 'Exitosamente', {
      positionClass: 'toast-top-center'
    });
  }

  quitGroup(nombreGrupo){
    let entries;
    let keyTodelete;
    let keys;
    let groupKey;

    this.groupList.forEach((element) => {
      if (element.name == nombreGrupo) {
        groupKey = element.$key;
        console.log("groupKey");
        console.log(groupKey);
        if ("integrants" in element){          
          entries = Object.values(element.integrants);
          keys = Object.keys(element.integrants);
  
          for (let i = 0; i < entries.length; i++) {
            if (entries[i].name == this.userName){
              keyTodelete = keys[i];
            }
          }
        } 
      }
    });

    this.userService.deleteGroups(
      keyTodelete,
      groupKey
    );

    this.toastr.error('Abandonaste este grupo', 'Exitosamente', {
      positionClass: 'toast-top-center'
    });

    for (let i = 0; i < this.selectedIntegrants.length; i++) {
      if (this.userName == this.selectedIntegrants[i]) {
        this.selectedIntegrants.splice(i, 1);
        this.permisoAdd = true;
        console.log(this.selectedIntegrants);
        if (this.userName != this.selectedIntegrants[i] && this.selectedGroup[0].privacity == "privado"){
          this.permisoVisual = false;
        } 
      }
    }
  }

  async addToTheGroup(nombreGrupo){
    this.owner = firebase.auth().currentUser.email;
    let key;
    let keygroup;
    let nombre;
    let entries;
    let integrantes: any[] = [];
    let estoy;

    await this.firebase.database.ref("register").once("value", (users,index) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == this.owner) {
          key = childKey;
          nombre = childData.name + " " + childData.lname;
        }        
      });
    });
    await this.firebase.database.ref("groups").once("value", (users,index) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.name == nombreGrupo) {
          keygroup = childKey;
        }        
      });
    });
    
    this.groupList.forEach((element,index) => {
      if ("integrants" in element){
        
        entries = Object.values(element.integrants);

        for (let i = 0; i < entries.length; i++) {
          integrantes.push(entries[i].name);
        }
      }
    });

    for (let i = 0; i < integrantes.length; i++) {
        if (integrantes[i] != nombre) {
          estoy = false;
        } else {
          estoy = true;
        }
    }
    
    if (estoy == false){
      this.firebase.database.ref("register").child(key).child("Groups").push({
        groupName: nombreGrupo,
        category: "integrant"
      });
      this.firebase.database.ref("groups").child(keygroup).child("integrants").push({
        name: nombre,
      });
      this.toastr.success('Te agregaste a este grupo', 'Exitosamente', {
        positionClass: 'toast-top-center'
      });
      this.selectedIntegrants.push(nombre);
      this.permisoAdd = false;
      this.permisoVisual = true;
    } else {
      this.toastr.error('Ya estas en este grupo', '', {
        positionClass: 'toast-top-center'
      });
    }
    
    
  }
  

  viewExternalGroup(name){
    this.viewInsideGroup = true;
    this.viewsearchGroup = false;
    this.firstPage = false;
    this.viewCreateGroup = false;
    this.nextImage = false;
    this.permisoVisual= true;
    this.permisoAdmin = true;
    this.permisoAdd = true;
    this.selectedGroup = [];
    this.selectedIntegrants = [];
    this.selectedTags = [];
    this.librosGrupo = [];
    let activeUser = firebase.auth().currentUser.email;
    let temp: any[] = [];

    let entries;
    let entriesIntegrants;

    this.groupList.forEach((element,index) => {
      if (this.groupList[index].name == name){
        
        if("integrants" in element){
          entriesIntegrants = Object.values(element.integrants);
  
          for (let i = 0; i < entriesIntegrants.length; i++) {
            this.selectedIntegrants.push(entriesIntegrants[i].name);
          }
        }
        this.openedGruop=name;
        
        entries = Object.keys(element.Images);
        this.selectedGroup.push(element);
        this.descripcion = element.description;
        
        this.selectedTags.push(Object.values(element.tags));
        if (element.books) {
          temp.push(Object.values(element.books));
        }  
      }
    });
    


    this.librosGrupo = temp[0];
    // console.log("libros grupo",this.librosGrupo);
    
    this.registerList.forEach((element,index) => {
      for (let i = 0; i < this.groupList.length; i++) {
        if (this.selectedGroup[0].owner == element.email) {
          this.nameOwner = element.name + " " + element.lname;
        }
        if (activeUser == element.email){
          this.userName = element.name + " " + element.lname;
        }  
      }  
    });

    for (let i = 0; i < this.selectedIntegrants.length; i++) {
      if(this.userName == this.selectedIntegrants[i]){
        this.permisoAdd = false;
      }
      
      if (this.userName != this.selectedIntegrants[i] && this.selectedGroup[0].privacity == "privado"){
        this.permisoVisual = false;
      }    
    }
    
    if(this.selectedGroup[0].owner == activeUser){
      this.permisoAdd = false;
      this.permisoAdmin = false;
      this.permisoVisual = true;
    }
  }

  goToPerfil(email){
    this.router.navigate(['externalProfiles',{email: email}]);
  }

  goToBook(i: string) {
    // console.log("CLICK LIBRO",this.librosGrupo[i]);
    // console.log("GRUPO",this.openedGruop);
    this.router.navigate(['/book',{Pag: this.librosGrupo[i].pag, title: this.librosGrupo[i].Titulo,url: this.librosGrupo[i].alink,group:this.openedGruop}]);
  }


  async getAmigos(){
    this.owner = firebase.auth().currentUser.email; 
    this.amigosList = [];

    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childData = user.val();
        if (childData.email == this.owner) {
          user.forEach((info) => {
            info.forEach((MisAmigos) => {
              MisAmigos.forEach((Amigos) => {
                const AmigosChildKey = Amigos.key;
                const AmigosChildData = Amigos.val();
              if (AmigosChildKey == "NombreAmigo"){              
                this.amigosList.push(AmigosChildData);
              }
              if (AmigosChildKey == "Contacto"){
                this.amigosEmails.push(AmigosChildData);
              }
              });
              
            });
          });
        }        
      });
    });
  }

  async deleteSth(integrante,nombreGrupo,id){
    let KeyUSER;
    let Keygroup;
    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.name + " " + childData.lname == integrante[0]) {
          KeyUSER = childKey;
          user.forEach((info) => {              
            info.forEach((MisGrupos) => {
              const MisgruposChildKey = MisGrupos.key;
                MisGrupos.forEach((Groups) => {
                  const GroupsChildKey = Groups.key;
                  const GroupsChildData = Groups.val();
                if (GroupsChildKey == "groupName" && GroupsChildData == nombreGrupo){
                  Keygroup = MisgruposChildKey;
                }              
                });
            });
          });
        }        
      });
    });
    let integrant = document.getElementById("integrante"+id);
    integrant.style.display = 'none';
    this.tagService.deleteIntegrant(Keygroup,KeyUSER);
    this.toastr.error('Integrante eliminado', 'Exitosamente');    
  }

  async onSubmit(){
    this.owner = firebase.auth().currentUser.email;
    const nombreGrupo = this.ngForm.controls.name.value;
    const integrant = this.ngForm.controls.integrants.value;

    let nameExist = this.groupList.find(group => group.name == nombreGrupo);
    let keyOwner;
    let keyGroup;
    let keyIntegrants = [];
    let contador = 0;

    if (nameExist) {
      this.toastr.error('Ese nombre ya esta registrado', 'Intenta otro nombre', {
        positionClass: 'toast-top-center'
      });
    } else{
      this.toastr.success('El grupo ha sido creado', 'Exitosamente', {
        positionClass: 'toast-top-center'
      });
      this.userService.createGroup(this.ngForm.value);
      
      this.nextImage = true;
      await this.firebase.database.ref("register").once("value", (users,index) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == this.owner) {
            keyOwner = childKey;
          }
          if (childData.email == this.amigosEmails[contador]) {
            contador ++;
            keyIntegrants.push(childKey);
          }        
        });
      });

      await this.firebase.database.ref("groups").once("value", (users,index) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.name == nombreGrupo) {
            keyGroup = childKey;
          }       
        });
      });
      
      if (keyGroup) {
        for (let i = 0; i < integrant.length; i++) {
          this.firebase.database.ref("groups").child(keyGroup).child("integrants").push({
            name: integrant[i],
          });
        }
        
      }
      

      if (keyOwner) {
        this.firebase.database.ref("register").child(keyOwner).child("Groups").push({
          groupName: nombreGrupo,
          category: "owner"
        });
      }
      for (let i = 0; i < keyIntegrants.length; i++) {
        this.firebase.database.ref("register").child(keyIntegrants[i]).child("Groups").push({
          groupName: nombreGrupo,
          category: "integrant"
        });
      }
    }
  }

  

  async SendImage (){
    const nombreGrupo = this.ngForm.controls.name.value;

    if(this.ImgUrl){
      let Key;      
      // const Email = firebase.auth().currentUser.email;

      await this.firebase.database.ref("groups").once("value", (groups) => {
        groups.forEach((group) => {
          const childKey = group.key;
          const childData = group.val();
          if (childData.name == nombreGrupo) {
            Key = childKey;
          }
                   
        });
      });

      this.firebase.database.ref("groups").child(Key).child("Images").push({
        ImgUrl: this.ImgUrl
      });
      
      this.toastr.success('Foto subida', 'Exitosamente');
    }
  }

  async UpdatePerfilPhoto(){
    const nombreGrupo = this.ngForm.controls.name.value;
    let Key;

    await this.firebase.database.ref("groups").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();     
        if (childData.name == nombreGrupo) {
          Key = childKey;
          user.forEach((info) => {
            info.forEach((Images) => {
              Images.forEach((ImgUrl) => {
                const ImagesChildKey = ImgUrl.key;
                const ImagesChildData = ImgUrl.val();

                if (ImagesChildKey == "ImgUrl"){
                  this.Currentimg = ImagesChildData;
                } 
              });
            });
          });
        }
      });
    });

    if(!this.Currentimg) {
      this.Currentimg = "../../../../../../assets/img/NoImage.png";
    }
  }

}
