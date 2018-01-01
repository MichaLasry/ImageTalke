import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AnimalsComponent } from './animals/animals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule, MatIconModule } from "@angular/material";
import { AddContactDialog } from "./dialog/add-contact-dialog/add-contact-dialog.componet";

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
    ContactsComponent,
    AnimalsComponent,
    AddContactDialog
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [
    AddContactDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
