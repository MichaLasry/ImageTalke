import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { user } from "../../models/user.model";
import { contact } from "../../models/contact.model";
import { Firebase } from '../../firebase.service';
import { AuthService } from '../../auth.service';


@Component({
    selector: "dialog-new-contact",
    templateUrl: "./add-contact-dialog.component.html",
    styleUrls: ["add-contact-dialog.component.scss"],
    //providers: [contact]
})
export class AddContactDialog {
    public ContactName:string;
    public ContactPhone:number;
    public ContactImg:ImageData;
    constructor(
       public dialogRef: MatDialogRef<AddContactDialog>,public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any,public as:AuthService,public router:Router, private afs: AngularFirestore, public fs: Firebase) {
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

          /*dialogRef.afterClosed().subscribe(result => {
            if (result) {
                let cn = new contact({ ContactName: this.ContactName, ContactPhone: this.ContactPhone });
                this.fs.addContact(cn).then(id=>{
                  let contact = this.as.addContact(id);
                  this.fs.updateUser(contact);
                  console.log(this.ContactName); 
                  
                })
              } 
             // else{ console.log(this.ContactPhone);}
              
            });*/
          this.dialog.closeAll();
          this.dialogRef.close();
    }
   
    upload(e){
        console.log(e);
    }



}