import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Component } from '@angular/core';
import { user } from './models/user.model';
import { Router } from "@angular/router";
import { CalendarEvent } from "angular-calendar";
import { connect } from 'net';
import { contact } from './models/contact.model';



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
  private _email: string;
  private contactsRef: AngularFirestoreCollection<contact>;
  private allconect:contact[];

  constructor(public afAuth: AngularFireAuth, private afsDocument: AngularFirestore, public router: Router) {
    this.contactsRef = this.afsDocument.collection("contacts");
   this.contactsRef.valueChanges().subscribe(contact=>{
     this.allconect=contact;
   })
    firebase.auth().languageCode = "en";
  }


  public save(contact){
this.contactsRef.add(contact).then(res=>{
  console.log("77");
  
})
  }
public get allContct(){
return this.allconect ? this.allconect:[]
}



  async login() {
    let u = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(u);
    //return this.getUserData(u.user.email);
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
    this.userRef = this.afsDocument.doc("users/" + user.username);
    this.userRef.set(user);
    // this.router.navigate(["home"]);
  }


  
  /*public updateContact(contact)//מעדכנת את הנתונים בשרת
  {
   // this.userRef.doc("users/").collection(this.contactsRef);
    this.userRef.contactsRef= this.afsDocument.collection("contacts /" + contact.contactname + contact.contactphone);
    this.userRef.set(user);
    //db.collection("app").document("users").collection(uid).document("notifications")
    // this.router.navigate(["home"]);
  }*/
 /* public updateContact(contact){//מעדכנת את איש הקשר בשרת
    this.contactsRef = this.afsDocument.collection("contacts/" + contact.contactname + contact.contactphone);
    this.contactsRef.add("contacts/");
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
  updateProfile(obj) {
    this._profile = obj;
    this.update();
  }

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
      this.contactsRef.add(contact).then(c => {
        res(c.id);
      })

    })
  }
}