import { FileUploadComponent } from './pages/private/file-upload/file-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

//firebase

import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore }    from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage }    from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularEpubViewerModule } from 'angular-epub-viewer';


//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Servicios
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { TagsComponent } from './pages/public/tags/tags.component';
import { FilterTagsPipe } from './pipes/filter-tags.pipe';
import { HomeComponent } from './pages/private/home/home.component';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { NavigationBarComponent } from './pages/private/navigation-bar/navigation-bar.component';
import { FooterComponent } from './pages/private/footer/footer.component';
import { filter } from 'rxjs/operators';
import { FilterPipe } from './pipes/filter.pipe';
import { ExternalProfilesComponent } from './pages/private/external-profiles/external-profiles.component';
import { GroupComponent } from './pages/private/group/group.component';
import { FilterExternalProfilesPipe } from './pipes/filter-external-profiles.pipe';
import { BookPDFComponent } from './pages/private/book-pdf/book-pdf.component';
// import { matDrawerAnimations, MatDrawerContainer } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';

//PDF Viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BookChatComponent } from './pages/private/book-chat/book-chat.component';
import { MyBooksComponent } from './pages/private/my-books/my-books.component';



 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FileUploadComponent,
    TagsComponent,
    FilterTagsPipe,
    HomeComponent,
    ProfileComponent,
    NavigationBarComponent,
    FooterComponent,
    FilterPipe,
    ExternalProfilesComponent,
    GroupComponent,
    FilterExternalProfilesPipe,
    BookPDFComponent,
    BookChatComponent,
    MyBooksComponent,
  ],
  imports: [
    AngularEpubViewerModule,
    MatSidenavModule,
    PdfViewerModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    NgxIntlTelInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    NgbModule,
    AngularFireStorageModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [
    RegisterComponent,
    AuthService,
    AngularFirestore,
    AngularFireAuthGuard,
    FilterTagsPipe,
    FilterPipe,
    FilterExternalProfilesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
