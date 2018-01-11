import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { user } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Firebase } from '../firebase.service';
//import * as firebase from 'firebase/app';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public UserName: string;
  public phone: number;
  private itemdoc:AngularFirestoreDocument<any>;

  //phoneRecaptchaVerifier: firebase.auth.RecaptchaVerifier
  constructor(public router: Router, private afs: AngularFirestore, public firebaseService: Firebase) {
    
    this.itemdoc=this.afs.doc("users/" +this.firebaseService.getEmail()); 
    this.itemdoc.valueChanges().subscribe(res=>{
      
      this.UserName=res.UserName;
      this.phone=res.phone;

  
    
    });
    
  }
  login(){
    if(this.UserName==""||this.phone==null)
    {
     document.getElementById("UserName").style.display="none";
     document.getElementById("phone").style.display="none";

     if(this.UserName=="")
     {
      document.getElementById("UserName").style.display="block";
     }
     if(this.phone==null)
     {
      document.getElementById("phone").style.display="block";
     }
    }
    else{
      this.firebaseService.updateUser(this.UserName,this.phone);
      this.router.navigate(["home"]);
      
    }
  }
  Submit() {
    //this.firebase.Submit(this.username,this.phone);

  }
  /*
    home() : void
    {
        let UserName= document.getElementById('UserName');
        let PelephoneNumber= document.getElementById('PelephoneNumber');
    if (UserName.textContent=="")
    {
      alert("enter the user name");
    }
    if (PelephoneNumber.textContent=="")
    {
      alert("enter Phone number");
    }
    his.router.navigate(["home"]);
    }*/
  ngAfterViewInit() {
    // this.phoneRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  //login() {
    // this.phoneRecaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //   'size': 'invisible',
    //   'callback': (response) => {
    //     // reCAPTCHA solved, allow signInWithPhoneNumber.

    //   }
    // });
  //}

  ngOnInit() {
  }

 
}




