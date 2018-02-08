import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { user } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Firebase } from '../firebase.service';
import * as firebase from 'firebase/app';
import { AuthService } from "../auth.service";
//import { userInfo } from 'os';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public UserName: string;
  public phone: string;
  private userdoc: AngularFirestoreDocument<user>;

  //phoneRecaptchaVerifier: firebase.auth.RecaptchaVerifier
  constructor(public router: Router, private firebaseService: Firebase,  private afs: AngularFirestore, public authService: AuthService) {
    this.UserName="";
    this.phone=null;
  }

  async loginWithGoogle() {
    if(this.UserName != "" && this.phone != "")
    {
      this.firebaseService.updateUser({username: this.UserName, phone :this.phone})
      await this.authService.keepUser({username: this.UserName, phone :this.phone})
    }
    this.getUserById;
    this.router.navigate(["home"])
  }
  getUserById(){
    this.firebaseService.userRef=this.firebaseService.userTempRef.doc(this.UserName);
  this.firebaseService.recipeTempObservable= this.firebaseService.userRef.valueChanges();
    this.firebaseService.recipeTempObservable.subscribe(res=>{
      console.log(res);
      this.UserName=res.UserName;
      //this.phone=res.phone;
    })  
  }
 
 getuserName(){
    return this.getUserById.name;
  }
  ngOnInit() {
  }


}





