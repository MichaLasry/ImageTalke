import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
//import { contact } from './models/contat.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
//import { Firebase } from 'firebase/' ;
import { AngularFireAuthModule } from 'angularfire2/auth'


@Component({
    selector: "dialog-new-contact",
    templateUrl: "./add-contact-dialog.component.html",
    styleUrls: ["add-contact-dialog.component.scss"]
})
export class AddContactDialog {
    public contactname:string;
    public contactphone:number;
    public contactimg:ImageData;

    constructor(
       public dialogRef: MatDialogRef<AddContactDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,public router:Router, private afs: AngularFirestore,/* public firebaseService: Firebase*/) {
            this.contactname="";
            this.contactphone=null;
            this.contactimg=null;

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    submit(){
        //sthis.dialogRef.close(this.data);
    }

    upload(e){
        console.log(e);
    }



}