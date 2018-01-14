import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from "@angular/router";



@Injectable()
export class AuthService {
  private _user;
  //private _email:string;
  constructor(public afAuth: AngularFireAuth) { }


  loginWithGoogle() {
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()).then(user => {
          console.log(user);
          this._user = user.user;
          res(this._user);
        });
    })

  }

  public addContact(id){
    this._user.contactId ? this._user.contactId.push(id) : this._user.contactId = [id];
    return this._user;
  }
  /*public getEmail() {
    if (this.afAuth.auth.currentUser)
      this._email=this.afAuth.auth.currentUser.email;
    else
      this._email = "";
    return this._email;
  }
 */
  public loginWIthEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {

      });
  }

  public signupWithEmail(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
  }

  public isLogin() {
    console.log(!!this.afAuth.auth.currentUser)
    return !!this.afAuth.auth.currentUser;
  }

  /* public get nameAndFname() {
     return this._user ? this._user.displayName : "guest";
   }
 */
  logout() {
    this.afAuth.auth.signOut();
  }
}