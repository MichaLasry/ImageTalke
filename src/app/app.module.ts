//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShapesComponent } from './shapes/shapes.component';
import { AnimalsComponent } from './animals/animals.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatDialogModule } from "@angular/material";
//import { AddContactDialog } from "./dialog/add-contact-dialog/add-contact-dialog.componet";
import { ColorsComponent } from './colors/colors.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddContactComponent,
    HomeComponent,
    ContactsComponent,
    ShapesComponent,
    AnimalsComponent,
   // AddContactDialog,
    ColorsComponent
   
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    //BrowserAnimationsModule,
    //MatDialogModule
  ],
  providers: [],
  entryComponents: [
    //AddContactDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
