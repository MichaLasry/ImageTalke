import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { user } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Firebase } from '../firebase.service';
import * as firebase from 'firebase/app';
import { AuthService } from "../auth.service";




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


    /*this.userdoc=this.afs.doc("users/" +this.firebaseService.getEmail()); 
    this.userdoc.valueChanges().subscribe(res=>{ 
      this.UserName=res.UserName;
      this.phone=res.phone;
    });*/
  }

  async loginWithGoogle() {
    await this.authService.loginWithGoogle();
    if(this.UserName != "" && this.phone != "")
    {
      this.firebaseService.updateUser({username: this.UserName, phone :this.phone})
    }
    this.router.navigate(["home"])
  }

  //Submit() {
  //this.firebase.Submit(this.username,this.phone);

  //}
  /*
    
 // ngAfterViewInit() {
    // this.phoneRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  //}

*/
  ngOnInit() {
  }


}




