import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
//import { contact } from '../models/contact.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
//import { Firebase } from '../firebase.service';
import { AngularFireAuthModule } from 'angularfire2/auth'


@Component({
    selector: "dialog-new-contact",
    templateUrl: "./add-contact-dialog.component.html",
    styleUrls: ["add-contact-dialog.component.scss"]
})
export class AddContactDialog {
    public ContactName:string;
    public ContactPhone:number;
    public ContactImg:ImageData;
    constructor(
       public dialogRef: MatDialogRef<AddContactDialog>,public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any,public router:Router, private afs: AngularFirestore,/* public firebaseService: Firebase*/) {
            this.ContactName="";
            this.ContactPhone=null;
            this.ContactImg=null;

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submit(){
        this.dialogRef.close(this.data);
    }
    openDialog(){
        let dialogRef = this.dialog.open(AddContactDialog, {
            data: {ContactName : this.ContactName, ContactPhone: this.ContactPhone }          
          });
          this.dialog.closeAll();
          this.dialogRef.close();
         // this.fs.updateContact({ContactName: this.ContactName, ContactPhone :this.ContactPhone})
          
    }
home(){
    this.router.navigate(["home"]);
}
    upload(e){
        console.log(e);
    }



}