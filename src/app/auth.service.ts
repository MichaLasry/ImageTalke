import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from "@angular/router";
import { user } from './models/user.model';
import { LoginComponent } from './login/login.component';
import * as logc from './login/login.component';
import { Firebase } from './firebase.service';


@Injectable()
export class AuthService {
  private _user:any;
  private userdoc: AngularFirestoreDocument<user>;
  public Uname;
  private Uphone;
  public contact:any[];
  public nameAndFname;
  
  constructor(public afAuth: AngularFireAuth,  private afs: AngularFirestore) {

   this._user = new user({});
   
   }

   public User(user){
    this._user.phone=user.phone;
    this._user.UserName=user.UserName;
    return this._user; 
  }
  public keepUser(user)//מעדכנת את הנתונים בשרת
  {
    let temp =JSON.parse(JSON.stringify(user));
    this.Uname=temp.username;
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()).then(user => { 
          this.afs.doc("users/" + this.Uname).valueChanges().subscribe(u => {
            this._user = u;
          });
          this._user.UserName=this.Uname;
          this._user.phone=this.Uphone;
        
          res(this._user);
        });
    });
    

  }
  
  loginWithGoogle() {
    /*
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()).then(user => { 
          this._user.UserName=this.Uname;
          console.log(this._user.UserName);
        this._user.UserName=this.user.UserName;
          res(this._user);
          console.log();
        });
    })
*/
  }
  public setu(u){
    return u;
  }
  public getu()
  {
    return 
  }
   
public getContacts(){
this.userdoc
  return;
}

  public get user(){
    return this._user;
  }
  

  public addContact(id){
    //id=this.user.UserName;
    console.log(this._user);
    this._user.contactId ? this._user.contactId.push(id) : this._user.contactId = [id];
    console.log(this._user.contactId);
    return this._user;
  }
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
  logout() {
    this.afAuth.auth.signOut();
  }
}


