import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from "src/app/services/user.service";
import * as firebase from 'firebase';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm = new FormGroup({
    signupEmail: new FormControl(),
    signupPassword: new FormControl(),
  });

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) { }

  registerList: User[];
  register = [];
  itemRef: any;

  ngOnInit(): void {

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {

    let email = this.signupForm.controls.signupEmail.value;
    const password = this.signupForm.controls.signupPassword.value;

    let emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    if (email.match(emailRegexp)) {
      
      this.userService.findById(email).once('value').then(data => {
        if (data.exists()) {

          console.log(data.val());

          this.login(email, password);
        } else {
          this.usuarioNoRegistrado();
        }
      }).catch(() => {
        this.usuarioNoRegistrado();
      });
    
    } else {

      this.userService.findByPhone(email).once('value').then(data => {
        if (data.exists()) {

          data.forEach(element => {
            let user = element.exportVal();

            console.log(user.email);

            email = user.email;
          });

          this.login(email, password);
        } else {
          this.usuarioNoRegistrado();
        }
      }).catch(() => {
        this.usuarioNoRegistrado();
      });
    }

  }

  usuarioNoRegistrado() {
    this.toastr.success('El usuario no esta registrado', 'Fallido', {
      positionClass: 'toast-top-center'
    });
  }


  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/home']);
      this.toastr.success('Ingreso exitoso', '', {
        positionClass: 'toast-top-center'
      });
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(`Error [${errorCode}]: ${errorMessage}`);
    });
  }

}
