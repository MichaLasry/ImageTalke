import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { user} from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Firebase } from '../firebase.service' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username?:string;
   public phone?:number;
  constructor( public router:Router, private afs: AngularFirestore, public firebaseService: Firebase ) { 
    this.username="";
    this.phone=null;
  }
  Submit()
  {
  //this.firebase.Submit(this.username,this.phone);
   
  }
    home() : void
    {
        let userName= document.getElementById('Username');
        let PelephoneNumber= document.getElementById('PelephoneNumber');
    if (userName.textContent=="")
    {
      alert("enter the user name");
    }
    if (PelephoneNumber.textContent=="")
    {
      alert("enter Phone number");
    }
      this.router.navigate(["home"]);
    }
  ngOnInit() {
  }
}




