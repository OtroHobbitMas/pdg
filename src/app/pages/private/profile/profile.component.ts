import { FilterPipe } from "src/app/pipes/filter.pipe";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormControl, FormGroup } from "@angular/forms";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { TagService } from "src/app/services/tag.service";
import { BookService } from "src/app/services/book.service";
import { User } from "src/app/models/user";
import { Group } from "src/app/models/group";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  userInfoList: User[];
  misTagsList: any[] = [];
  misLibrosList: any[] = [];
  ImageSelected: string;
  registerList: User[];
  Currentimg: string;
  CurrentDescription: string;
  UserName: string;
  UserLastName: string;
  FulName: string;
  misAmigosList: any[] = [];
  keyOrdenList: any[] = [];
  KeyUSER: string = "";
  keyOrdenAmigosList: any[] = [];
  keyOrdenBooksList: any[] = [];
  amigoEmail: any;
  misGroupsList: any[] = [];
  groupList: Group[];

  ngFormProfile = new FormGroup({
    descripcion: new FormControl(),
  });

  constructor(
    private _config: NgbCarouselConfig,
    public authService: AuthService,
    private firebaseAuth: AngularFireAuth,
    private userService: UserService,
    private bookService: BookService,
    private router: Router,
    private firebase: AngularFireDatabase,
    private toastr: ToastrService,
    private filterpipe: FilterPipe,
    private tagService: TagService
  ) {}

  async ngOnInit() {
    this.UserAcount();

    this.userService
      .getRegister()
      .snapshotChanges()
      .subscribe((item) => {
        this.registerList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.registerList.push(x as User);
        });
        this.archieveGroups(this.groupList, this.registerList);
        this.getMisAmigos();
      });

    this.userService
      .getGroups()
      .snapshotChanges()
      .subscribe((item) => {
        this.groupList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.groupList.push(x as Group);
        });
        this.archieveGroups(this.groupList, this.registerList);
        this.getMisGrupos();
      });

    //  await this.PrintConsistance();
    //  await this.UpdatePerfilPhoto();
    //  await this.WhoIsWritingMe();
    //  await this.SearchImg();
  }

  archieveGroups(list, list2) {
    this.groupList = list;
    this.registerList = list2;
  }

  goToHome() {
    this.router.navigate(["/home"]);
  }
  goToProfile() {
    this.router.navigate(["/profile"]);
  }
  goToTags() {
    this.router.navigate(["/tags"]);
  }
  goToBook(i: string) {
    // console.log(this.misLibrosList[i]);
    // console.log(this.misLibrosList[i].link);
    this.router.navigate(['/book',{Pag: this.misLibrosList[i].Pag, title: this.misLibrosList[i].Titulo,url: this.misLibrosList[i].alink,group:""}]);
  }

  async doLogout() {
    await this.authService.logout();
    this.router.navigate(["/"]);
  }

  UserAcount() {
    // var user = this.firebaseAuth.auth.currentUser;
    let $this = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.

        if (user != null) {
          user.providerData.forEach(function (profile) {
            // console.log("Sign-in provider: " + profile.providerId);
            // console.log("  Provider-specific UID: " + profile.uid);
            // console.log("  Name: " + profile.displayName);
            // console.log("  Email: " + profile.email);
            // console.log("  Phone Number: " + profile.photoURL);
            $this.UpdatePerfilPhoto(profile.email);
            $this.getNameUser(profile.email);
            $this.getDescriptionUser(profile.email);
            $this.getMisLibros();
            $this.getMisTags();
          });
        }
      } else {
        // No user is signed in.
      }
    });
  }

  //---------------------------------------------------INIT DROP ZONE--------------------------------------------------------
  fileUrl: string;
  ImgUrl: string;
  ImgGUrl: string;

  getUrl(event) {
    this.fileUrl = event;
  }

  async getImg(event) {
    this.ImgUrl = event;
    const Email = firebase.auth().currentUser.email;
    await this.SendImage();
    await this.UpdatePerfilPhoto(Email);
  }

  // async getGroupImg(event){
  //   this.ImgGUrl = event;
  //   console.log("URL recibida en padre: " + this.ImgGUrl);
  //  await this.groupImage();
  // }

  async SendImage() {
    if (this.ImgUrl) {
      let Key;
      const Email = firebase.auth().currentUser.email;

      await this.firebase.database.ref("register").once("value", (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == Email) {
            Key = childKey;
          }
        });
      });

      this.firebase.database.ref("register").child(Key).child("Images").push({
        ImgUrl: this.ImgUrl,
      });

      this.toastr.success("Photo subida", "Exitosamente");
    }
  }

  getMisGrupos() {
    const Email = firebase.auth().currentUser.email;
    let entries;
    this.misGroupsList = [];
    
    this.registerList.forEach((element, index) => {
      if (Email == element.email) {
        if ("Groups" in element) {
          entries = Object.keys(element.Groups);
          for (let i = 0; i < entries.length; i++) {
            this.misGroupsList.push({
              name: element.Groups[entries[i]].groupName,
            });
          }
        }
      }
    });


    this.groupList.forEach((element, index) => {
      for (let i = 0; i < this.misGroupsList.length; i++) {
        if (this.misGroupsList[i].name == element.name) {
          if ("Images" in element) {
            entries = Object.keys(element.Images);
            this.misGroupsList[i].Images = element.Images[entries[0]].ImgUrl;
          } else {
            this.misGroupsList[i].Images = "../../../../../../assets/img/NoImage.png";
          }
        }
      }  
    });

  }

  //-----------------------------------------------------Update perfil photo----------------------------------------------

  async UpdatePerfilPhoto(Mail) {
    let Key;

    const Email = Mail;

    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
          user.forEach((info) => {
            info.forEach((Images) => {
              Images.forEach((ImgUrl) => {
                const ImagesChildKey = ImgUrl.key;
                const ImagesChildData = ImgUrl.val();
                const filter = /https:/gm;

                if (ImagesChildKey == "ImgUrl") {
                  this.Currentimg = ImagesChildData;
                }
              });
            });
          });
        }
      });
    });

    if (!this.Currentimg) {
      this.Currentimg = "../../../../../../assets/img/NoImage.png";
      const query: string = ".container .Photoimg";
      const Photoimg: any = document.querySelector(query);
      // const query2: string = "#app .profile";
      // const profile: any = document.querySelector(query2);
      Photoimg.src = this.Currentimg;
      // profile.src = this.Currentimg;
    } else {
      const query: string = ".container .Photoimg";
      const Photoimg: any = document.querySelector(query);
      // const query2: string = "#app .profile";
      // const profile: any = document.querySelector(query2);
      Photoimg.src = this.Currentimg;
      // profile.src = this.Currentimg;
    }
  }
  //-----------------------------------------------------End Update perfil photo--------------------------------------

  //-----------------------------------------------------Search IMg----------------------------------------------
  //   async SearchImg(){

  //     let Key;
  //     let ContactNumber = this.FormAdd.controls.Numbercontact.value;

  //     await this.firebase.database.ref("register").once("value", (users) => {
  //       users.forEach((user) => {
  //         const childKey = user.key;
  //         const childData = user.val();
  //  // PRIMERA PASADA PARA RECORRER PRIMERA CAPA
  //         if (childData.email == ContactNumber || childData.telefono.e164Number == ContactNumber) {
  //           Key = childKey;
  //           // SEGUNDA PASADA PARA RECORRER DENTRO DEL USUARIO
  //           user.forEach((info) => {
  //             const infoChildKey = info.key;
  //             const infoChildData = info.val();
  //             // SEGUNDA PASADA PARA RECORRER DENTRO DE CONTACTS
  //             info.forEach((Images) => {
  //               const imagesChildKey = Images.key;
  //               const imagesChilData = Images.val();
  //               // SEGUNDA PASADA PARA RECORRER LOS NUMERO Y NOMBRE
  //               Images.forEach((ImgUrl) => {
  //                 const ImagesChildKey = ImgUrl.key;
  //                 const ImagesChildData = ImgUrl.val();
  //                 const filter = /https:/gm;

  //                 if (ImagesChildKey == "ImgUrl"){
  //                   this.ImageSelected = ImagesChildData;
  //                 }

  //               });
  //             });
  //           });
  //         }
  //       });
  //     });
  //     return this.ImageSelected;
  //   }
  //-----------------------------------------------------ENd Search IMg----------------------------------------------
  //-----------------------------------------------------Start get name----------------------------------------------

  async getNameUser(Mail) {
    let Key;
    const Email = Mail;
    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
          if (childData.lname != "" && childData.name != "") {
            this.UserName = childData.name;
            this.UserLastName = childData.lname;
            this.FulName = this.UserName.concat(" " + this.UserLastName);
          }
        }
      });
    });

    if (this.UserName != "") {
      const query: string = ".container .name";
      document.querySelector(query).innerHTML = this.FulName;
    } else {
      const query: string = ".container .name";
      document.querySelector(query).innerHTML = "Nombre no registrado";
      this.toastr.error("Error al buscar el nombre", "Error");
    }
  }
  //-----------------------------------------------------End get name----------------------------------------------
  //-----------------------------------------------------Start Send descrition------------------------------------------
  async SendDescription() {
    const query: string = ".container .inputDescripcion";
    const Descript: any = document.querySelector(query);
    const Description = Descript.value;

    if (Description != "") {
      let Key;
      const Email = firebase.auth().currentUser.email;
      await this.firebase.database.ref("register").once("value", (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == Email) {
            Key = childKey;
          }
        });
      });

      this.firebase.database.ref("register").child(Key).child("Descripcion").push({
          Descripcion: Description,
        });

      this.toastr.success("Descripcion actualizada", "Exitosamente");
    }
  }
  //-----------------------------------------------------END Send descrition------------------------------------------
  //-----------------------------------------------------Start Get descrition------------------------------------------
  async getDescriptionUser(Mail) {
    let Key;
    // firebase.auth().currentUser.email
    const Email = Mail;
    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
          user.forEach((info) => {
            info.forEach((Description) => {
              Description.forEach((DescriptionText) => {
                const DescriptionChildKey = DescriptionText.key;
                const DescriptionChildData = DescriptionText.val();

                if (DescriptionChildKey == "Descripcion") {
                  this.CurrentDescription = DescriptionChildData;
                }
              });
            });
          });
        }
      });
    });

    if (this.CurrentDescription != "") {
      const query: string = ".inputDescripcion";
      const element: any = document.querySelector(query);
      element.value = this.CurrentDescription;
    }
    const query: string = "#descripcionID";
    const Descripcion: any = document.querySelector(query);
    let DescripcionValue = Descripcion.value;

    if (DescripcionValue == "undefined") {
      DescripcionValue = "Ingresa tu descripción";
    }
  }
  //-----------------------------------------------------Start get Mislibros------------------------------------------
  async getMisLibros() {
    const Email = firebase.auth().currentUser.email;

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
  }

  //-----------------------------------------------------END get Mislibros------------------------------------------

  getMisAmigos() {
    let entries;
    // console.log("this.registerList");
    // console.log(this.registerList);
    this.misAmigosList = [];

    const Email = firebase.auth().currentUser.email;
    this.registerList.forEach((element, index) => {
      if (Email == element.email) {
        if ("Amigos" in element) {
          entries = Object.keys(element.Amigos);
          for (let i = 0; i < entries.length; i++) {
            this.misAmigosList.push({
              name: element.Amigos[entries[i]].NombreAmigo,
            });
          }
        }
      }
    });


    this.registerList.forEach((element, index) => {
      for (let i = 0; i < this.misAmigosList.length; i++) {

        if (this.misAmigosList[i]) {
          if (this.misAmigosList[i].name == element.name + " " + element.lname) {
            this.misAmigosList[i].User = element.email;
            if ("Images" in element) {
              entries = Object.keys(element.Images);
              let index = entries.length - 1;
              this.misAmigosList[i].Images = element.Images[entries[index]].ImgUrl;
            } else {
              this.misAmigosList[i].Images = "../../../../../../assets/img/NoImage.png";
            }
            
          }
        }
        
      }
      
    });

  }

  goToPerfil(email){
    this.router.navigate(['externalProfiles',{email: email}]);
  }

  goToGroup(name){
    this.router.navigate(['groups',{name: name}]);
  }

  //-----------------------------------------------------Start get MisTags------------------------------------------

  async getMisTags() {
    let Key;
    let Tags = {};
    let keyTAGS;

    const Email = firebase.auth().currentUser.email;

    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        // console.log("entre nivel1");
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          this.KeyUSER = childKey;
          user.forEach((info) => {
            info.forEach((MisTags) => {
              const pruebakey = MisTags.key;
              keyTAGS = pruebakey;

              MisTags.forEach((Tag) => {
                const TagChildKey = Tag.key;
                const TagChildData = Tag.val();
                if (TagChildKey == "Tag") {
                  Tags = TagChildData;
                  // console.log(aut);
                  // this.misTagsList.push({Tags:TagChildData});
                  if (Tags != "") {
                    // console.log("info key");
                    // console.log(keyTAGS);
                    this.keyOrdenList.push(keyTAGS);
                    this.misTagsList.push({ Tags });
                  }
                }
              });
            });
          });
        }
      });
    });
  }
  //-----------------------------------------------------END get MisTags------------------------------------------

  async deleteSth(i) {
    let index = i.split("-");
    let query2: string = "#contTag" + index[1];
    let cont: any = document.querySelector(query2);
    cont.style.display = "none";
    this.tagService.deleteTag(this.keyOrdenList[index[1]], this.KeyUSER);
    this.toastr.warning("Tag eliminado", "Exitosamente");
  }

  async deleteBook(i) {
    console.log("ENTRÉ");
    // let index = i.split("-");
    let query2: string = "#mislibros" + i;
    console.log("QUERY",query2);
    let cont: any = document.querySelector(query2);
    console.log("CONT",cont);
    //por el carrusel no encuentra el query2
    // console.log(cont);
    // cont.style.display = "none";

    this.bookService.deleteBooks(
      this.keyOrdenBooksList[i],
      this.KeyUSER
    );
    this.toastr.warning("Libro eliminado", "Exitosamente");
  }

  async deleteFriend(i,deleteEmail) {
    let query2: string = ".containerAmigos" + i;
    let cont: any = document.querySelector(query2);
    cont.style.display = "none";
    const Email = firebase.auth().currentUser.email;
    let myKey;
    let entries;
    let friendKey;
    let keys; 

    this.registerList.forEach((element) => {
      if (element.email == Email) {
        myKey = element.$key;
        if ("Amigos" in element){          
          entries = Object.values(element.Amigos);
          keys = Object.keys(element.Amigos);
  
          for (let i = 0; i < entries.length; i++) {
            if (entries[i].Contacto == deleteEmail){
              friendKey = keys[i];
            }
          }
        } 
      }
    });


    this.userService.deleteFriends(
      friendKey,
      myKey
    );
    this.toastr.error("Amigo eliminado", "Exitosamente");
  }

  
  async editUserName(register: User) {
    let variable;
    this.userService.updateUsername(variable);
  }
}
