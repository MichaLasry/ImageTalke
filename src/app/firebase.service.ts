import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Component } from '@angular/core';

import { user} from './models/user.model';


import { Router } from "@angular/router";
@Injectable()
export class Firebase {
  public auth;
  private username: string;
  private phone: number;
  private image: ImageData;
  public userRef;
  constructor(public afAuth: AngularFireAuth, private afsDocument: AngularFirestore, public router: Router) {
    this.userRef = this.afsDocument.collection("users"); 
  }  
  public getUserName() {
    
        if (this.afAuth.auth.currentUser)
        this.username=this.afAuth.auth.currentUser.displayName;
      else
        this.username = "";
      return this.username;
    
      }
      public getPhone(){
        if (this.afAuth.auth.currentUser)
        this.username=this.afAuth.auth.currentUser.phoneNumber;
      else
        this.phone = null;
      return this.phone;
    
      }
   
  public Submit(username,phone )
  { 
    //console.log();
    this.userRef.doc().set({
     username:username,
     phone:phone
    });
    this.router.navigate(["home"]);
    
}

}