import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule, MatIconModule } from "@angular/material";
import { AddContactDialog } from "./dialog/add-contact-dialog/add-contact-dialog.componet";
import { FormsModule }    from '@angular/forms';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { Firebase } from './firebase.service';
import { AuthService } from "./auth.service";
import * as firebase from 'firebase';
import { HttpModule } from '@angular/http';





export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBrOFiKMXNYRaCE-R34GjX8wEST3yltt9E",
    authDomain: "imagetalk-76424.firebaseapp.com",
    databaseURL: "https://imagetalk-76424.firebaseio.com",
    projectId: "imagetalk-76424",
    storageBucket: "imagetalk-76424.appspot.com",
    messagingSenderId: "498043825347"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoriesComponent,
    AddContactDialog,
    
    
    
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    MatIconModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [
    Firebase,
    AuthService
  ],
  entryComponents: [
    AddContactDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
