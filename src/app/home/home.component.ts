import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
//import { AddContactDialog } from "../dialog/add-contact-dialog/add-contact-dialog.componet";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  phone: string;
  imgUrl: string;
  constructor(public router: Router/*, public dialog: MatDialog*/) { }

  contacts(): void {
    this.router.navigate(["contacts"]);
  }
       put_pic(imgUrl):void
    {
        document.execCommand('insertimage',false,imgUrl)

    }

    animals() : void
    {
      this.router.navigate(["animals"]);
    }
 colors() : void
    {
      this.router.navigate(["colors"]);
    }
 cookware() : void
    {
      this.router.navigate(["cookware"]);
    }
 emotions() : void
    {
      this.router.navigate(["emotions"]);
    }
     games() : void
    {
      this.router.navigate(["games"]);
    }
 housewares() : void
    {
      this.router.navigate(["housewares"]);
    }
     letters() : void
    {
      this.router.navigate(["letters"]);
    }
     places() : void
    {
      this.router.navigate(["places"]);
    }
        shapes() : void
    {
      this.router.navigate(["shapes"]);
    }
        social() : void
    {
      this.router.navigate(["social"]);
    }
        vegetables() : void
    {
      this.router.navigate(["vegetables"]);
    }
        vehicle() : void
    {
      this.router.navigate(["vehicle"]);
    }
   
  ngOnInit() {
  }
}




  /*add(): void {
    let dialogRef = this.dialog.open(AddContactDialog, {
      width: '250px',
      data: { name: this.name, animal: this.phone, imgUrl: this.imgUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        
      }
    });

  }
*/