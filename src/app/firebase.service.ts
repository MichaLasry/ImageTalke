import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Component } from '@angular/core';


import { user } from './models/user.model';


import { Router } from "@angular/router";
@Injectable()
export class Firebase {
  public auth;
  private _profile;  
  private username: string;
  private phone: number;
  private image: ImageData;
  public userRef;
  private _email:string;

  
  

  constructor(public afAuth: AngularFireAuth, private afsDocument: AngularFirestore, public router: Router) {
    this.userRef = this.afsDocument.doc("users");
    firebase.auth().languageCode = "en";
    

  }
  
  async login() {
    let u = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(u);
    return this.getUserData(u.user.email);
    //u.user.photoURL
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  private getUserData(username: string) { //פעם אחת נקרא לפונקציה היא מאזינה לכל הנתונים של המשתמש
    return new Promise((res, rej)=>{
      this.afsDocument.doc("users/" + username).valueChanges().subscribe(user => {
        this._profile = user;
        res(this._profile);
      });
    });
    
  }


 /* public updateUser(username:string,phone:number,image:ImageData){//מעדכנת את הנתונים בשרת
    this.username=username;
    this.phone=phone;
    this.image=image;
  }*/


  public getEmail() {
    if (this.afAuth.auth.currentUser)
      this._email=this.afAuth.auth.currentUser.email;
    else
      this._email = "";
    return this._email;
  }
  updateProfile(obj) {
    this._profile = obj;
    this.update();
  }

  private update() {
    if( this.getUserName().length  > 0)
      this.afsDocument.doc("users/" + this.username).set(this._profile).then(res => {
      });
  }
  

  public updateUser(username,phone)//מעדכנת את הנתונים בשרת
  { 
    this.userRef.doc(this.getEmail()).set({
     username:username,
     phone:phone, 
    });
    this.router.navigate(["home"]);
  }


 /* public updateUser() {
    this.afAuth.auth.signInWithPopup(  
    new firebase.auth.GoogleAuthProvider()).then(user => {
    let verify= user.additionalUserInfo.profile.verified_email;
    if(verify){
    let email = user.additionalUserInfo.profile.email;
    if(this.exist_user(email))
    {
    this.isLogin= true;
    return;
    }
    else{
      this.isLogin= false;
    return;
    }
  }
      
      });
  }*/
    
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

  public Submit(username, phone) {
    //console.log();
    this.userRef.doc().set({
      username: username,
      phone: phone
    });
    this.router.navigate(["home"]);

  }




}