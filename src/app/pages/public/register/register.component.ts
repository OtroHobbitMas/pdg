import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder, } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { CustomValidators } from "src/app/shared/guards/custom-validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;

  registerList: User[];
  register = [];
  itemRef: any;
  email: any = "ejemplo";

  ngForm = new FormGroup({
    name: new FormControl(),
    lname: new FormControl(),
    telefono: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {

    this.ngForm = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        telefono: "",
        name: "",
        lname: "",
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            // CustomValidators.patternValidator(/\d/, {
            //   hasNumber: true
            // }),
            // // check whether the entered password has upper case letter
            // CustomValidators.patternValidator(/[A-Z]/, {
            //   hasCapitalCase: true
            // }),  
            // // check whether the entered password has a lower case letter
            // CustomValidators.patternValidator(/[a-z]/, {
            //   hasSmallCase: true
            // }),
            // check whether the entered password has a special character
            // CustomValidators.patternValidator(
            //   /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            //   {
            //     hasSpecialCharacters: true
            //   }
            // ),
            Validators.minLength(6)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  ngOnInit(): void {
    this.userService.getRegister()
      .snapshotChanges().subscribe(item => {
        this.registerList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.registerList.push(x as User);
        });
      });
  }

  createForm() {
    this.ngForm = this.formBuilder.group({
      email: "",
      telefono: "",
      name: "",
      lname: "",
      password: "",
      confirmPassword: "",
      // socketId: "",
    });
  }

  onSubmit() {

    const email = this.ngForm.controls.email.value;
    const telefono = this.ngForm.controls.telefono.value;
    const password = this.ngForm.controls.password.value;
    const confirmPassword = this.ngForm.controls.confirmPassword.value;
    let emailExist = this.registerList.find(user => user.email == email);
    let phoneExist = this.registerList.find(user => user.telefono.e164Number == telefono.e164Number);

    if (emailExist) {
      this.toastr.error('Ese correo ya esta registrado', 'Intenta otro correo', {
        positionClass: 'toast-top-center'
      });
    } else if (phoneExist) {
      this.toastr.error('El número ya esta registrado', 'Intenta otro número', {
        positionClass: 'toast-top-center'
      });
    } else {

      if (confirmPassword == password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then( () => {

          this.userService.insertRegister(this.ngForm.value);

        }).catch(function (error) {
          
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          
          console.log("Error",errorCode,errorMessage);
        });

        this.email = email;
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          this.router.navigate(['/tags']);
          this.toastr.success('Cuenta creada', 'Exitosamente', {
            positionClass: 'toast-top-center'
          });
        })

        this.router.navigate(["/tags"]);
      }

    }
  }


  async doLogout() {
    await this.authService.logout();
    this.router.navigate(["/"]);
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }

  goToTags() {
    this.router.navigate(["/tags"]);
  }

  addcontact(count: number) {
    const query: string = "#app .addcontact";
    const addcontact: any = document.querySelector(query);

    if (count == 0) {
      count = 1;
      addcontact.style.left = 0;
    } else {
      count = 0;
      addcontact.style.left = "-100vh";
    }
  }

  areaEstados() {
    const query: string = "#app .areaEstados";
    const areaEstados: any = document.querySelector(query);

    if (this.countEstad == 0) {
      this.countEstad = 1;
      areaEstados.style.left = 0;
    } else {
      this.countEstad = 0;
      areaEstados.style.left = "-100vh";
    }
  }

  countEstad: number = 0;

  openaddContact() {
    if (this.count == 0) {
      this.count = 1;
      this.addcontact(this.count);
    } else {
      this.count = 0;
      this.addcontact(this.count);
    }
  }

  count: number = 1;

  SettingsToggle() {
    const query: string = "#app .DesplegableLeftMore";
    const DesplegableLeftMore: any = document.querySelector(query);

    if (this.countSett == 0) {
      this.countSett = 1;
      DesplegableLeftMore.style.opacity = 1;
      DesplegableLeftMore.style.transform = "scale(1)";
    } else {
      this.countSett = 0;
      DesplegableLeftMore.style.opacity = 0;
      DesplegableLeftMore.style.transform = "scale(0)";
    }
  }

  countSett: number = 0;

  createGroup() {
    const query: string = "#app .newGroupContainer";
    const newGroupContainer: any = document.querySelector(query);

    if (this.countGroup == 0) {
      this.countGroup = 1;
      newGroupContainer.style.left = 0;
    } else {
      this.countGroup = 0;
      newGroupContainer.style.left = "-100vh";
    }
  }

  countGroup: number = 0;

  createImageGroup() {
    const query: string = "#app .updateImageGroup";
    const updateImageGroup: any = document.querySelector(query);

    if (this.countImageGroup == 0) {
      this.countImageGroup = 1;
      updateImageGroup.style.left = 0;
    } else {
      this.countImageGroup = 0;
      updateImageGroup.style.left = "-100vh";
    }
  }

  countImageGroup: number = 0;
}
