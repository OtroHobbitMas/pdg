import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-external-profiles',
  templateUrl: './external-profiles.component.html',
  styleUrls: ['./external-profiles.component.scss']
})
export class ExternalProfilesComponent implements OnInit {

  constructor(public authService: AuthService,
    private firebaseAuth:AngularFireAuth, 
    private userService: UserService,
    private router: Router,
    private firebase: AngularFireDatabase,
    private toastr: ToastrService,
    private filter: FilterPipe,
    public route: ActivatedRoute) { }

    registerList: User[];
    imgUser: any[] = [];
    registerListNew: any[] = [];
    arr: any[] = [];
    viewProfile = false;
    susTagsList: any[] = [];
    susLibrosList: any[] = [];
    correoExternoUser = '';
    UserName = '';
    UserLastName = '';            
    FulName = '';
    correoExt = '';
    Currentimg = "../../../../../../assets/img/NoImage.png";
    searchBoxExternal= '';
    mensaje = "";
    call;


   ngOnInit(): void {
    
      this.UserAcount();
      this.userService.getRegister()
      .snapshotChanges().subscribe(item => {
        this.registerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.registerList.push(x as User);
        });
        
        const Email = firebase.auth().currentUser.email;
        this.registerListNew = Object.values(this.registerList);

        for (let i = 0; i < this.registerList.length; i++) {
            this.registerListNew  = Object.values(this.registerList[i]);

            for (let j = 0; j < this.registerListNew.length; j++) {            
              
              if (this.registerListNew[j]==Email) {
                this.registerList.splice(i, 1);
              }
              
            }
        }

        this.getImgUsers(this.registerList);
        
      });

      this.call=this.route.snapshot.paramMap.get("email");
      if (this.call) {
        this.viewExternalProfile(this.call);
      } 
  }

  UserAcount (){    
    let $this = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
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

  async getImgUsers(arrList){
    const Email = firebase.auth().currentUser.email;
    let entries;
    let entriesDescipcion;

    arrList.forEach((element,index) => {
      if ("Images" in element){
        entries = Object.keys(element.Images);
        arrList[index].Images = element.Images[entries[entries.length-1]].ImgUrl;
      } else {
        arrList[index].Images = "../../../../../../assets/img/NoImage.png";
      }

      if ("Descripcion" in element){
        entriesDescipcion = Object.values(element.Descripcion);
        arrList[index].Descripcion = entriesDescipcion[entriesDescipcion.length-1].Descripcion;
      } else {
        arrList[index].Descripcion = "Sin descripcion";
      }

    });
  }


  async addFriend(index){
    let Key;
    let contador = 0;
    let confirm = false;
    const Email = firebase.auth().currentUser.email;

    let correoAmigo = document.querySelector("#correo"+index);         
    let correoAmigoText = correoAmigo.textContent;
    
    let nombreAmigo = document.querySelector("#nombre"+index);         
    let nombreAmigoText = nombreAmigo.textContent;

    let imagenAmigo: any = document.querySelector("#imagen"+index);         
    let imagenAmigoSrc = imagenAmigo.src;

    if (correoAmigoText != ''){
      this.correoExternoUser = correoAmigoText;
    }

      await this.firebase.database.ref("register").once("value", (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == Email) {
            Key = childKey;
            user.forEach((info) => {
              info.forEach((Amigos) => {
                Amigos.forEach((misAmigos) => {
                  const misAmigosChildKey = misAmigos.key;
                  const misAmigosChildData = misAmigos.val();
                if (misAmigosChildKey == "Contacto"){
                    this.arr.push(misAmigosChildData);                  
                }
                });
                
              });
            });
          }        
        });
      });

      if (this.arr==undefined){
        this.firebase.database.ref("register").child(Key).child("Amigos").push({
          Contacto: correoAmigoText,
          NombreAmigo: nombreAmigoText,
          ImagenAmigo: imagenAmigoSrc
        });
        this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
      } else{
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i]==correoAmigoText){
            contador ++;
          }        
        }
        if (contador==0){
          confirm = true;
        } else {
          this.toastr.error('Esta persona ya se encuentra en tu lista', 'Fallido');
        }
        if (confirm == true){
          this.firebase.database.ref("register").child(Key).child("Amigos").push({
            Contacto: correoAmigoText,
            NombreAmigo: nombreAmigoText,
            ImagenAmigo: imagenAmigoSrc
          });
          this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
        }
      }
         
  }

  async addFriendInsidePerfil(){
    let Key;
    let contador = 0;
    let confirm = false;
    const Email = firebase.auth().currentUser.email;

      // Verificar si ya esta agregado
      await this.firebase.database.ref("register").once("value", (users) => {
        users.forEach((user) => {
          const childKey = user.key;
          const childData = user.val();
          if (childData.email == Email) {
            Key = childKey;
            user.forEach((info) => {
              info.forEach((Amigos) => {
                Amigos.forEach((misAmigos) => {
                  const misAmigosChildKey = misAmigos.key;
                  const misAmigosChildData = misAmigos.val();
                if (misAmigosChildKey == "Contacto"){
                    this.arr.push(misAmigosChildData);                  
                }
                });
                
              });
            });
          }        
        });
      });
      
      if (this.arr==undefined){
        this.firebase.database.ref("register").child(Key).child("Amigos").push({
          Contacto: this.correoExt,
          NombreAmigo: this.FulName,
          ImagenAmigo: this.Currentimg
        });
        this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
      } else{
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i]==this.correoExt){
            contador ++;
          }        
        }
        if (contador==0){
          confirm = true;
        } else {
          this.toastr.error('Esta persona ya se encuentra en tu lista', 'Fallido');
        }
        if (confirm == true){
          this.firebase.database.ref("register").child(Key).child("Amigos").push({
            Contacto: this.correoExt,
            NombreAmigo: this.FulName,
            ImagenAmigo: this.Currentimg
          });
          this.toastr.success('Amigo añadido a tu lista', 'Exitosamente');
        }
      }
         
  }

  gotoExternalProfile(){
    this.viewProfile = false;
    // this.getImgUsers(this.registerList);
  }

  async viewExternalProfile(correoExternoUser){
    // let correoName = correoExternoUser.split("-");
    this.viewProfile = true;
    let $this = this;
    this.correoExt = correoExternoUser;
    let CurrentDescription;
    let Autor;
    let Imagen;
    let Titulo;
    let keyTAGS;
    let Tags = {};
    const Email = firebase.auth().currentUser.email;
    this.susLibrosList = [];
    this.susTagsList = [];
    this.Currentimg = "";

    let Key;
    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();     
        if (childData.email == correoExternoUser) {
          Key = childKey;
          if (childData.lname != '' && childData.name != ''){
            this.UserName = childData.name;
            this.UserLastName = childData.lname;            
            // this.FulName = this.UserName.concat(" "+this.UserLastName);
            this.FulName = this.UserName+" "+this.UserLastName;
          }
          user.forEach((info) => {
            info.forEach((Description) => {
              const pruebakey = Description.key;
              keyTAGS = pruebakey;
              Description.forEach((DescriptionText) => {
                const DescriptionChildKey = DescriptionText.key;
                const DescriptionChildData = DescriptionText.val();

                if (DescriptionChildKey == "Descripcion"){
                  CurrentDescription = DescriptionChildData;
                }
                
                if (DescriptionChildKey == "Autor"){

                  Autor = DescriptionChildData;

                } else if (DescriptionChildKey == "Imagen"){

                  Imagen = DescriptionChildData;

                } else if (DescriptionChildKey == "Titulo"){
                  Titulo = DescriptionChildData;
                  if (Autor != '' && Imagen != '' && Titulo != ''){
                    this.susLibrosList.push({Autor,Imagen,Titulo});
                  }
                }
                
                if (DescriptionChildKey == "ImgUrl"){
                  $this.Currentimg = DescriptionChildData;
                }
                
                if (DescriptionChildKey == "Tag"){
                  Tags = DescriptionChildData;
                  if (Tags != ''){
                    this.susTagsList.push({Tags});
                  }
                }

              });
            });
          });          
        }
      });
    });


    await this.firebase.database.ref("register").once("value", (users) => {
      users.forEach((user) => {
        const childKey = user.key;
        const childData = user.val();
        if (childData.email == Email) {
          Key = childKey;
          user.forEach((info) => {
            info.forEach((Amigos) => {
              Amigos.forEach((misAmigos) => {
                const misAmigosChildKey = misAmigos.key;
                const misAmigosChildData = misAmigos.val();
              if (misAmigosChildKey == "Contacto"){
                if (misAmigosChildData == correoExternoUser) {
                  this.mensaje = "Amigo";
                } else {
                  this.mensaje = "Seguir";
                }
                                  
              }
              });
              
            });
          });
        }        
      });
    });
    
    setTimeout(function(){
      
      if($this.UserName != '') {
      
        const query: string = ".containerView .name";        
        // let nameInput = document.querySelector(query).innerHTML = $this.FulName;
        let nameInput = document.querySelector(query);
        nameInput.textContent = $this.FulName;
  
      } else {
        const query: string = ".containerView .name";
        document.querySelector(query).innerHTML = "Nombre no registrado";
        $this.toastr.error('Error al buscar el nombre', 'Error');   
      }

      if(!$this.Currentimg) {
        $this.Currentimg = "../../../../../../assets/img/NoImage.png";
      }

      if(CurrentDescription != '') {
      
        const query: string = ".inputDescripcion";
        const element: any  = document.querySelector(query);
        element.value = CurrentDescription;
  
      }
      const query: string = "#descripcionID";
      const Descripcion: any = document.querySelector(query);
      let DescripcionValue = Descripcion.value
  
      if (DescripcionValue == 'undefined'){
        DescripcionValue = "Ingresa tu descripción"
      } 

    }, 500);
    

     
  }

}
