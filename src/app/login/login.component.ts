import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public router:Router ) { }
    home() : void
    {
        let userName= document.getElementById('Username');
        let PelephoneNumber= document.getElementById('PelephoneNumber');
  if (userName.textContent=="")
    {
      alert("enter the user name");
     
    }
    if (PelephoneNumber.textContent==" ")
    {
      alert("enter Phone number");
    }
      this.router.navigate(["home"]);
    }


  ngOnInit() {
  }

}



