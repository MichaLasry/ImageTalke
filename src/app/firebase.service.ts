
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
//import { user } from '../../models/user.model';
import { Router } from "@angular/router";
@Injectable()
export class FirebaseService {
  public auth;
  private name: string;
  private phone: number;
  public userRef;




  constructor(public afAuth: AngularFireAuth, private afsDocument: AngularFirestore, public router: Router) {
    this.userRef = this.afsDocument.collection("users");
  }

  /*async login() {
    let u = await this.afAuth.auth.signInWithPopup(new firebase.auth.PhoneAuthProvider())
    console.log(u);
    return this.getUserData(u.user.phone);
    //u.user.photoURL
  }

}

private getUserData(phone: number) {
  return new Promise((res, rej)=>{
    this.afsDocument.doc("volunteers/" + id).valueChanges().subscribe(user => {
      this._profile = user;
      res(this._profile);
    });
  });
  
}

public getName() {
  
      if (this.afAuth.auth.currentUser)
      this._name=this.afAuth.auth.currentUser.displayName;
    else
      this._name = "";
    return this._name;
  
    }
    public getPhone(){
      if (this.afAuth.auth.currentUser)
      this._name=this.afAuth.auth.currentUser.phoneNumber;
    else
      this._phone = null;
    return this._phone;
  
  
    }*/
  }