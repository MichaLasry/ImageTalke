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
  public contactId:any[];
  private userdoc: AngularFirestoreDocument<any>;

  //phoneRecaptchaVerifier: firebase.auth.RecaptchaVerifier
  constructor(public router: Router, private firebaseService: Firebase,  private afs: AngularFirestore, public authService: AuthService) {
    this.UserName="";
    this.phone=null;

    /*this.userdoc=this.afs.doc("users/" +this.UserName); 
    this.userdoc.valueChanges().subscribe(res=>{  
      this.UserName=res.UserName;
      this.phone=res.phone;
      this.contactId=res.contactId;
      
    
    
    });*/
  
  }

  async loginWithGoogle() {
    if(this.UserName != "" && this.phone != "")
    {
      this.firebaseService.updateUser({username: this.UserName, phone :this.phone})
      await this.authService.keepUser({username: this.UserName, phone :this.phone})
    }
    else{
   if(this.UserName==""||this.phone=="")
      {
       document.getElementById("UserName")
       document.getElementById("phone")
       if(this.UserName=="")
        {
<<<<<<< HEAD
          console.log("ttt");
           document.getElementById("username").style.display='block';
        }
       else{
           document.getElementById("UserName").style.display='none';

          }
       if(this.phone==null)
=======
           document.getElementById(this.UserName).style.display='block';
        }
       else{
           document.getElementById(this.UserName).style.display='none';

          }
       if(this.phone=="")
>>>>>>> 0df9b7d3e6bc9f5eb6615385e3810647ae66d188
        {
          document.getElementById("phone").style.display='block';
        }
         else{
<<<<<<< HEAD
           document.getElementById("phone").style.display='none';

          }
       }
            }
=======
           document.getElementById("UserName").style.display='none';

          }
       }
      }
>>>>>>> 0df9b7d3e6bc9f5eb6615385e3810647ae66d188
    this.router.navigate(["home"])
  }
 
 getuserName(){
    //return this.getUserById.name;
  }
  ngOnInit() {
  }


}





