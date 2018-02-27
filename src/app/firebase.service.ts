import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Component } from '@angular/core';
import { user } from './models/user.model';
import { Router } from "@angular/router";
import { CalendarEvent } from "angular-calendar";
import { contact } from './models/contact.model';
import { auth } from 'firebase';
import { AuthService } from "./auth.service";


@Injectable()
export class Firebase {
  public auth;
  private _profile;
  private username: string;
  private phone: string;
  private contactname: string;
  private contactphone: string;
  private image: ImageData;
  private contactl: string;
  public userRef;
  public userTempRef:AngularFirestoreCollection<user>;
  recipeTempObservable: Observable<user>;
  private _email: string;
  private contactsRef: AngularFirestoreCollection<contact>;
  private allconect:contact[];
  private userdoc: AngularFirestoreDocument<user>;
  private contactRef: AngularFirestoreCollection<contact>;

  
  public c = new contact({});   
  

  
  constructor(public afAuth: AngularFireAuth,public as:AuthService, private afsDocument: AngularFirestore, public router: Router) {
//   this.afsDocument.doc("users/").collection("contacts");
   //this.contactRef = this.afsDocument.collection("contact");
    this.contactsRef = this.afsDocument.collection("contacts");
    firebase.auth().languageCode = "en";
  }

  /*public t() {
    this.c.ContactName="shira";
    this.c.ContactPhone=111;
    return new Promise((res, rej) => {
      let temp =JSON.parse(JSON.stringify(c));
      this.contactRef.add(temp).then(c => {
        console.log(contact.name);
        res(c.id);
      })

    })
  }
*/

  async login() {
    let u = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(u);
  }

  private getUserData(username: string) { //פעם אחת נקרא לפונקציה היא מאזינה לכל הנתונים של המשתמש
    return new Promise((res, rej) => {
      this.afsDocument.doc("users/" + username).valueChanges().subscribe(user => {
        this._profile = user;
        res(this._profile);
      });
    });
  }
  public updateUser(user)//מעדכנת את הנתונים בשרת
  {
    let temp =JSON.parse(JSON.stringify(user));
    this.userRef = this.afsDocument.doc("users/" + user.username);
    this.userRef.set(temp);
    console.log(user);
  }
  public getusernsme(user){
    return user.username;
  }
/*public get userphone(user){
    return user.phone;
  }*/
  /*public getUserName(){
    this.afsDocument.doc("users/").valueChanges().subscribe(res=>{
    
      console.log(this.username);
      //this.phone=res.phone;
    })
   }
  
*/

  logout() {
    this.afAuth.auth.signOut();
  }

  public getEmail() {
    if (this.afAuth.auth.currentUser)
      this._email = this.afAuth.auth.currentUser.email;
    else
      this._email = "";
    return this._email;
  }
  /*updateProfile(obj) {
    this._profile = obj;
    this.update();
  }*/

  private update() {
    if (this.getUserName().length > 0)
      this.afsDocument.doc("users/" + this.username).set(this._profile).then(res => {
      });
  }

public getUserName() {

    if (this.afAuth.auth.currentUser)
      this.username = this.afAuth.auth.currentUser.displayName;
    else
      this.username = "";
    return this.username;

  }
  public getPhone() {
    if (this.afAuth.auth.currentUser)
      this.username = this.afAuth.auth.currentUser.phoneNumber;
    else
      this.phone = null;
    return this.phone;

  }
  
  
  public addContact(contact) {
    return new Promise((res, rej) => {
      let temp =JSON.parse(JSON.stringify(contact));      
      this.contactsRef.add(temp).then(c => {
        console.log(temp.ContactName);
        res(c.id);
      })

    })
  }
}