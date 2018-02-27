
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddContactDialog } from "../dialog/add-contact-dialog/add-contact-dialog.componet";
import { user } from '../models/user.model'
import { Firebase } from '../firebase.service';
import { AuthService } from '../auth.service';
import { contact } from '../models/contact.model';
import { auth } from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 name: string;
 Cname: string;
 phone: string;
 imgUrl: string;
 imgs: any[];
 imagesArray = [];
 public _text: string[] = [];
 public imgSelect: any[] = [];
 public userRef;
 public user_data: user[];
 private col:AngularFirestoreCollection<any>;
 public u:user[];
 public myu:user[];
 public currContact: any;
 public msg = "";




 constructor(private afs: AngularFirestore, public router: Router ,private fs : Firebase, private as: AuthService ,public dialog: MatDialog) {
 this.userRef = this.afs.collection("users");
 let res=this.userRef.valueChanges().subscribe(res=>{
 console.log(this.as.Uname);
 /*this.contact_data=res;
 var table_cont=document.getElementById("content");
 table_cont.innerHTML='';
 for (let i=0;i<this.contact_data.length;i++){
 this.createTuple(i);
 }*/
 
 });
 /*
for(let i =0,j=0;i<this.u.length;i++){
 console.log("5");
 if(this.u[i].UserName == res.UserName){
 console.log("res");

 this.myu[j]=this.u[i];
 j++;
 }
 }
*/
 this.col=this.afs.collection<contact>("users"); 
 this.col.valueChanges(). subscribe(res=>{
 this.u=res;
 });
 console.log(this.col);
 console.log(this.myu);

 
 this.verbs();
 //this.Cname=dialog.openDialogs;
 }
 
 
put_the_name(cname){
var element = document.getElementById("contact");
element.innerHTML = cname;
//element.valueChanges(cname);

}
 public addToText(img: string) {
    this.imgSelect.push(img);
 }

 public get allContacts(){
     return this.as.user? this.as.user.contactId : null;
 }

 public generateText() {
    let str = "";
    this.imagesArray.unshift([]);
    this.imgSelect.forEach(item => {
    str += " " + item["word"];
    this.imagesArray[0].push(item["img"]);
    });
    this._text.push(str);
    this.imgSelect = [];
    var msg = new SpeechSynthesisUtterance(str);
    window.speechSynthesis.speak(msg);
    
 }

 get text() {
 return this._text;
 }

 public ReadText() {
 let str = "";
 this.imgSelect.forEach(item => {
 str += " " + item["word"];
 });
 var msg = new SpeechSynthesisUtterance(str);
 window.speechSynthesis.speak(msg);
 }
 public put_pic_up() {
 let str = "";
 this.imgSelect.forEach(item => {
 str += " " + item["word"];
 });
 var msg = new SpeechSynthesisUtterance(str);
 window.speechSynthesis.speak(msg);
 }

 contacts(): void {
 this.router.navigate(["contacts"]);
 }
 put_pic(imgUrl): void {
 document.execCommand('insertimage', false, imgUrl);
 }

 animals(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F311525.png?alt=media&token=ede92443-c234-4b39-a3a5-aef18a3cc7f1",
 word: "a lion"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194953.png?alt=media&token=28890143-fbaa-406a-8b36-c7b3b0b4ce23",
 word: "a cat"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2Fsnake.jpg?alt=media&token=bfbbea56-d640-4289-b6db-b808e08266a5",
 word: "a snake"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F355679.svg?alt=media&token=5dd217aa-e111-4063-9602-1eb480cf6c2f",
 word: "a camel"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616599.svg?alt=media&token=f8804ae9-b5d5-4b14-ad20-5791a5e2b2d9",
 word: "a monky"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616710.png?alt=media&token=dc5b768b-bf63-4b1b-90ff-7f1ab417d2e8",
 word: "a hourse"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616720.png?alt=media&token=2cad27f1-bb5d-465d-895e-15b8ded36198",
 word: "a dog"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F%D7%AA%D7%A8%D7%92%D7%95%D7%9C.png?alt=media&token=89b2cd31-34f3-422a-83cf-ed582676bf96",
 word: "a chicken"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194954.png?alt=media&token=71509882-7f2f-4a09-a152-c0f6b2aa5c62",
 word: "a frog"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2Fbear.png?alt=media&token=e47f6351-2e97-473f-ad89-b27ec528dd3a",
 word: "a bear"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194959.png?alt=media&token=b9a5e7ed-0832-4e4a-b2c8-f76d808f06a0",
 word: "a hipo"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194974.png?alt=media&token=1d26a741-38d3-41b7-975a-1adde62a45c6",
 word: "a mouse"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194986.png?alt=media&token=2e8ab499-a3b3-47e9-86de-3ca4880f7273",
 word: "a cow"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F371972.png?alt=media&token=bf6d3008-9181-475b-b5a1-9d8dfbd4f8af",
 word: "a zebra"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616703.png?alt=media&token=ad4952ba-97e1-47bc-b125-6306f8a2652b",
 word: "an elephant"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194976.png?alt=media&token=c2581036-20bb-4c46-b57a-c75c14c1bc49",
 word: "a tigger"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F194979.png?alt=media&token=2db5dad9-618c-4884-a847-06af67b13b51",
 word: "a pingween"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F427406.png?alt=media&token=a1e78cf9-3d7f-4b73-ac9e-2a7cc5bc427c",
 word: "a parrot"
 }
 ]
 }
 food(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fpizza.svg?alt=media&token=a01167ed-46f6-443f-8ee9-424f51b74270",
 word: "pizza"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fhamburger.svg?alt=media&token=ad1615c1-8ca6-4454-898b-02e34f5a505d",
 word: "a burger"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fbagel.svg?alt=media&token=dbfb7601-7eb0-4fa3-a42a-176b92b0b0ad",
 word: "a bagle"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fbread.png?alt=media&token=129fbc3d-6c4e-4594-ae61-7708c1cdbcfb",
 word: "bread"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fbutter.svg?alt=media&token=f5b2de77-2114-4ad7-bd8c-11c622833d5c",
 word: "butter"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fcake.svg?alt=media&token=cedc8577-ebde-4601-918b-86e50d676dac",
 word: "a cake"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fcandy.svg?alt=media&token=67dea0db-9be8-44e7-a50d-8fd2d21acdbc",
 word: "a candy"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fcereal.svg?alt=media&token=45be28a1-751d-447e-a4a6-9347e7d9f234",
 word: "cereal"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fchoco.png?alt=media&token=d6c40360-753a-4cc2-ad9e-db9d3381f084",
 word: "choco"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fchocolate.svg?alt=media&token=39268665-7cc2-4997-9840-89ddc9a0c6d8",
 word: "a chocolate"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fcoffee.svg?alt=media&token=f50fdc41-bcaf-4887-ada8-77fb07f4adad",
 word: "coffee"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fcookie.png?alt=media&token=27687d6e-03d4-4b3d-a1a4-1164ad629c4c",
 word: "a cookie"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fcupcake.png?alt=media&token=317e2162-f206-43c5-ab1e-813cb3f9880e",
 word: "a cupcake"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fdoughnut.svg?alt=media&token=64d792a7-0c6c-4afa-8f85-8854dbbabac9",
 word: "a doughnut"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Ffries.png?alt=media&token=0aa22abb-7c3c-4ec3-ba79-af1c80b14332",
 word: "fries"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2FIce%20cream.png?alt=media&token=4d3a5b63-9d53-443a-b3a7-d142783d5850",
 word: "an ice cream"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fketchup.svg?alt=media&token=6110367f-44ed-46ad-ac1a-55ebc6db7e6a",
 word: "katchup and mustard"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Flollipop.svg?alt=media&token=7d911d32-1d11-4562-9dd3-aa00446487d2",
 word: "a lollipop"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Flunch%20box.png?alt=media&token=08027998-53db-45bb-acf9-575a1b070ba8",
 word: "a lunch box"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Forange%20juice.svg?alt=media&token=1b722aad-786e-4edb-a605-ba1138512a89",
 word: "a orange juice"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fpancake.svg?alt=media&token=d3a2412c-e9a6-482f-bdb6-f4dd782ccf79",
 word: "a pancake"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fpeanut.svg?alt=media&token=18ceef68-ae30-489b-a5c6-0a98d0256396",
 word: "a peanut"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fpopcorn.png?alt=media&token=455f8be5-67d3-4cd4-8c5c-41e227b02729",
 word: "popcoren"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fpretzels.svg?alt=media&token=5ff9ea36-363b-42ff-8b53-cbe4bd63dbdb",
 word: "pretzes"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Frolda.svg?alt=media&token=ac6f573d-95ec-44c3-8761-4876dbd016e1",
 word: "a rolda"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fsandwich.svg?alt=media&token=8866f909-bbf6-4635-99bc-2676b1e6ac23",
 word: "a sandwich"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fsteak.svg?alt=media&token=33bf2d71-4ffc-415c-ae97-16babd2d90be",
 word: "a steak"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fsushi.svg?alt=media&token=27a9f89a-9bc6-4a23-b43f-7de1a24a017d",
 word: "a sushi"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fwatermelon%20popsicle.svg?alt=media&token=4c03557b-1c94-48e1-8606-62a3d554afdf",
 word: "a watermelon popsicle"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Food%2Fyellow%20cheese.svg?alt=media&token=ec813cfb-5cfc-47f9-bd18-3cea15bc64ad",
 word: "a yellow cheese"
 }
 ]
 }

 colors(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fazure.png?alt=media&token=1d706aac-a911-467a-9c48-ff35d9d50b17",
 word: "azure"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fblack.png?alt=media&token=82fea5a6-c32a-4d6c-87f1-c629a15a648d",
 word: "black"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fblue.png?alt=media&token=e755008c-627b-484c-8978-93c2928ce5a1",
 word: "blue"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fbown.png?alt=media&token=b3a12375-e336-4998-9b65-29c4f0072271",
 word: "brown"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fgold.png?alt=media&token=b787ec09-1f5d-46f8-90a2-2ef8cae3dae1",
 word: "gold"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fgreen.png?alt=media&token=0a62d1b8-b70f-4011-b3aa-84185de63bd1",
 word: "green"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fgrey.png?alt=media&token=c3beeb17-f736-46ec-98ba-bbb9075b798d",
 word: "gray"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Forange.png?alt=media&token=f6241f17-6b83-45cc-a90e-bc0ef770ee78",
 word: "orange"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fpink.png?alt=media&token=25be0e18-04a4-4ee6-a829-efb42571247b",
 word: "pink"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fpurple.png?alt=media&token=37bac8ee-3218-4770-a3c3-55d8a131bcc5",
 word: "purple"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fred.png?alt=media&token=47703121-7768-4ba9-8ff3-b6330961d41b",
 word: "red"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fyellow.png?alt=media&token=2080ceea-34e6-463e-98f7-b0dc8b1d5500",
 word: "yellow"
 }
 ]
 }
 cookware(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F126840.svg?alt=media&token=1ca5d909-9420-4c4a-a5e4-cd55d251d7e3",
 word: "a silverware"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F148128.svg?alt=media&token=ed843da3-6957-4f62-bfa7-d18d5096e700",
 word: "a washing machine"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F148161.svg?alt=media&token=5f5d81e7-d0cc-45c5-8e2c-538722157c2d",
 word: "a sofa"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F148206.svg?alt=media&token=035ecf3d-d4d2-4579-8eb7-2feb3424a30b",
 word: "a closet"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F150388.svg?alt=media&token=59f37f17-7b8b-4270-93ed-d864b9d3d3ea",
 word: "a chair"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F150400.svg?alt=media&token=b78c0a19-9e11-4185-9a21-beea81133417",
 word: "a table"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F164481.svg?alt=media&token=e98fc219-06e6-4cea-9d2e-47b9692a0b31",
 word: "an flat iron"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F186524.svg?alt=media&token=d4d5e375-e96e-4270-a715-33675f660ccc",
 word: "an oven"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F187970.svg?alt=media&token=984e9a76-a4f3-493e-9d71-0970fdb55e75",
 word: "a frying pan"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F189946.svg?alt=media&token=d80b234e-7d3f-4be9-9857-f923386223ac",
 word: "a cooking pot"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F204342.svg?alt=media&token=b1bff4ff-0f34-4bc7-a465-1dafd4292c9d",
 word: "a light"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F133405.svg?alt=media&token=6fe1ddd2-3f5c-4821-bff9-c4c9603b6d09",
 word: "a cooking pot"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F456678.png?alt=media&token=28a8e50a-d38e-41c3-965d-62dfea974ba5",
 word: "tooth brush and tooth paste"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F524492.svg?alt=media&token=3ed12e6d-f790-4c87-8393-17f2f62c5b36",
 word: "a fridge"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F607057.svg?alt=media&token=45cd1cf2-88a2-40f3-924e-79e07ad27612",
 word: "a bed"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F621787.svg?alt=media&token=82a8bbcb-21a4-40e8-88c7-34202f6574db",
 word: "a cup of coffee"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F133405.svg?alt=media&token=6fe1ddd2-3f5c-4821-bff9-c4c9603b6d09",
 word: "a bathroom"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F231929.svg?alt=media&token=72ab787d-75a5-4707-866b-6be70bc09d57",
 word: "a washbasin"
 }
 ]
 }

 emotions(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F214225.svg?alt=media&token=d87ade8a-ce2c-4482-83d4-08dc1ba0a935",
 word: "confused"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F576803.svg?alt=media&token=c882f50d-edbb-458b-be20-b65d55680695",
 word: "lovely"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F576827.svg?alt=media&token=93949206-1df5-4203-9346-b37d6db531d9",
 word: "crying"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F576866.svg?alt=media&token=b662792d-ec1b-4fc8-8fee-8101774cad40",
 word: "thinking"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F637556.svg?alt=media&token=3985cf5d-478d-4920-833d-1d3b214fe48d",
 word: "laughing"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F183601.svg?alt=media&token=af5b5baf-eff7-47a0-b7c6-b2043f439d00",
 word: "joking"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F187134.svg?alt=media&token=db51e3ab-0e92-4767-abc4-b4bf7e00aeac",
 word: "happy"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F187140.svg?alt=media&token=08a2db55-734f-4472-8d24-e60a5e490c45",
 word: "angry"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F187143.svg?alt=media&token=5e2cde4d-9a4e-403e-8c96-6c296fabdbcd",
 word: "sad"
 }
 ]
 }

 games(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%91%D7%A8%D7%95%D7%95%D7%96.jpg?alt=media&token=dd02223b-28e1-4c8d-9214-5e71bbe01bad",
 word: "a duck water"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%92%D7%95%D7%9C%D7%95%D7%AA.jpg?alt=media&token=8b74ddc0-c16e-4b75-a04a-05f37e329b63",
 word: "a marbles"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%92%D7%9C%D7%92%D7%9C%D7%99%D7%95%D7%AA.png?alt=media&token=684cc646-df6a-441d-b47f-59102a25f8a5",
 word: "roller skates"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%93%D7%95%D7%91%D7%99.png?alt=media&token=22676b89-7e77-41c7-a5e4-9a7403dc5532",
 word: "a bearish"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%9B%D7%93%D7%95%D7%A8%20%D7%99%D7%9D.png?alt=media&token=934c93c7-bc20-4633-9bc5-3e70c68057a7",
 word: "a sea ball"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%9B%D7%93%D7%95%D7%A8.png?alt=media&token=3a36f8d8-fb99-4840-b8b3-b46f3495933e",
 word: "a ball"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%A4%D7%90%D7%96%D7%9C.png?alt=media&token=003cd27d-43cb-4a0c-935d-5b6bebd6907e",
 word: "a pazzel"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Games%2F%D7%A4%D7%9C%D7%99%D7%A1%D7%98%D7%A9%D7%99%D7%9F.jpg?alt=media&token=5aea8619-3774-4e18-a6d5-3522d8fe9736",
 word: "a play station"
 },
 ]
 }
 housewares(): void {
 this.router.navigate(["housewares"]);
 }
 letters(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fa.png?alt=media&token=2162ebeb-3ae8-4c75-ab08-9a05e3a05aca",
 word: "a"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fb.png?alt=media&token=bc2d2b8c-0d29-4504-aa8c-079998ff08a1",
 word: "b"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fc.png?alt=media&token=918baaad-f7a2-4b38-857d-10712435640f",
 word: "c"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fd.png?alt=media&token=489d2e9e-49f9-4bce-ae6d-f9e9b457a754",
 word: "d"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fe%20(Custom).png?alt=media&token=28c1de4b-f947-46a1-b7d7-0f2a30618e6f",
 word: "e"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Ff.png?alt=media&token=65ec3708-b634-4ce6-9f1d-55ada5c04f1f",
 word: "f"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fg.png?alt=media&token=00df0f31-73d3-4a92-8ee4-7019f372fd18",
 word: "g"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fh.png?alt=media&token=bc8a645a-395d-4326-b49f-623959dbfcb3",
 word: "h"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fi.png?alt=media&token=5d29cdd3-f1e6-44ad-8d06-18ed9bdef9ee",
 word: "i"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2FJC.png?alt=media&token=961b8ef2-25ea-4c42-af45-c7ac26b5401b",
 word: "j"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fk.png?alt=media&token=abf11305-c967-4556-a4bb-10f677b9caa9",
 word: "k"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fl.png?alt=media&token=131580a6-a9d0-48b7-8cb8-64758c767ae8",
 word: "l"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2FMC.png?alt=media&token=7933a85c-916f-4cf6-a65f-efa341496951",
 word: "M"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fn.png?alt=media&token=3bf4160b-ddd6-491d-b088-d419e6689959",
 word: "n"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fo.png?alt=media&token=0dc0ceb1-b67f-42ca-8a39-5e1efd5c5b5b",
 word: "o"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fp.png?alt=media&token=2289cf3f-b9fc-4749-9195-95f69c19082d",
 word: "p"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fq.png?alt=media&token=44083c37-a760-4593-902a-0855e56b252f",
 word: "q"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fr.png?alt=media&token=ab0df89a-53ab-4303-acc8-6a9a28d4a8ac",
 word: "r"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fs.png?alt=media&token=0c41ff93-f8c2-452b-91a7-dcf4f6856109",
 word: "s"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Ft.png?alt=media&token=14942677-629d-4610-9f23-a32c965fabb2",
 word: "t"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2FWC.png?alt=media&token=7dfce01d-aca5-4f51-8cc7-7f3246441f1e",
 word: "W"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fx.png?alt=media&token=8c1f766b-e63a-4d66-ab36-19e0241b823e",
 word: "x"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fy.png?alt=media&token=b65935af-cf7d-4fde-a35d-874205795119",
 word: "y"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fz.png?alt=media&token=08354792-458f-414a-91da-de34216df796",
 word: "z"
 },
 ]
 }
 places(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fbank-01.png?alt=media&token=8d035a51-aa3a-478e-a1a3-fdccd2ed01a6",
 word: "a bank"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fbathroom-01.png?alt=media&token=8a2974d2-c079-4c54-99c9-b48bc6ea05fd",
 word: "a bathroom"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fbeach-01.png?alt=media&token=c3d982e4-b40c-492f-98d1-ef30d713a211",
 word: "the beach"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fcircus-01.png?alt=media&token=15a3c3cc-111f-467f-a54d-17bcb96e7481",
 word: "a circus"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fclothing%20store%20-01.png?alt=media&token=7070c49d-9195-4962-8aa8-6ccd2a54a235",
 word: "the clothing store"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fdentist%20office-01.png?alt=media&token=b7ad7957-f2d5-4c85-8a7f-4574cf60f790",
 word: "the dentist office"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fdesert-01.png?alt=media&token=f22eb847-c929-4cb2-9e10-9f1eb0d30dc8",
 word: "a desert"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fdrug%20store-01.png?alt=media&token=391c238a-dd76-4e43-b095-4d002adb2d15",
 word: "the drug store"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fforest-03.png?alt=media&token=7e46c0e7-ac44-4db5-ac35-bedaec889f4d",
 word: "a forest"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fgas%20station.png?alt=media&token=72a73248-89fe-414a-a2f5-825df8acecfb",
 word: "gas station"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fgrocery%20store-01.png?alt=media&token=54694e9d-5337-4618-bcfe-c4a5a4290009",
 word: "the grocery store"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fhotel-01.png?alt=media&token=073bfa15-ca36-43ac-b1cd-67a106302c08",
 word: "the hotel"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fice%20cream%20shop-01.png?alt=media&token=a680a5f9-f1a8-4d96-a1c9-aa97aaad6bf5",
 word: "the ice cream shop"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fkitchen-01.png?alt=media&token=ec750a73-3bdc-4ddf-b75f-7fd4e5a8ef99",
 word: "the kitchen"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Flibrary.png?alt=media&token=5ea15407-5de9-4966-914b-a701c94c4986",
 word: "a library"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fmuseum-01.png?alt=media&token=b748439d-3239-4d13-a03d-dc6035a442ed",
 word: "a museum"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Focean.png?alt=media&token=9a64f9a9-be70-48a3-a751-de1e6cb75a9f",
 word: "an ocean"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Fpost%20office-01.png?alt=media&token=07cba86a-926d-414a-bdba-4e0d0043aba3",
 word: "post office"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/places%20fix!%2Frestaurant-01.png?alt=media&token=12dbca1f-afde-4051-91af-c08767d434de",
 word: "a restaurant"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Places%2F%D7%94%D7%A6%D7%92%D7%94.png?alt=media&token=91f85a1f-098d-4b24-81cc-fc55fcaee74b",
 word: "theater"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Places%2F%D7%99%D7%95%D7%9D%20%D7%94%D7%95%D7%9C%D7%93%D7%AA.png?alt=media&token=9b7d0958-9122-4a10-8e1e-6756e5c71a18",
 word: "birthday"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Places%2F%D7%9E%D7%98%D7%99%D7%99%D7%9C.png?alt=media&token=b86edf8f-ecc4-42e7-a9b9-4b2a683d55ea",
 word: "a trip"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Places%2F%D7%9E%D7%A1%D7%A4%D7%A8%D7%94.png?alt=media&token=e6c8165c-4d95-46f3-8e50-e5cea9b04a62",
 word: "the barbershop"
 },
 ]
 }
 shapes(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F571650.svg?alt=media&token=f206b85a-ca82-4427-b758-195ba8547040",
 word: "a hexagonal"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F123.png?alt=media&token=ebc34284-4546-4461-a26e-cd8e6638e6af",
 word: "x"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F414840.png?alt=media&token=c9d4635b-41fb-4b60-98a8-6035b5ec8341",
 word: "a moon"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F262430.png?alt=media&token=4697e5c0-7417-4524-8b9d-1e4e62496e1b",
 word: "a triangular"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F137093.svg?alt=media&token=58932aca-de67-4486-998b-7c9d4f01f80f",
 word: "a square"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2Fcheck.png?alt=media&token=16000033-3cae-4311-96f2-dfff76fc6fc8",
 word: "v"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F%D7%9B%D7%95%D7%9B%D7%91.svg?alt=media&token=84f6ccd3-2037-4dd2-b2f4-f3bf26a2c4eb",
 word: "a star"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F%D7%9C%D7%91.svg?alt=media&token=8451d5fb-05fe-417b-b2c9-278db1d468dc",
 word: "a heart"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F%D7%A2%D7%99%D7%92%D7%95%D7%9C.svg?alt=media&token=9a57e474-59ad-42f7-8709-cf68f9809344",
 word: "a circle"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F%D7%A7%D7%95%D7%91%D7%99%D7%94.png?alt=media&token=8fddfdde-491d-40ff-80b6-f19481a33a00",
 word: "a cube"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F%D7%A9%D7%9E%D7%A9.svg?alt=media&token=dfee33b9-39b7-4335-9c29-c771c996ff32",
 word: "sun"
 },
 /*{
 img: "https://firebasestorage.googleapis.com/v0/b",
 word: "and"
 }*/
 ]
 }
 social(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%92%D7%A8%D7%9D.png?alt=media&token=5779182f-8e57-4ef5-b737-606189cdcd20",
 word: "Instagram"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%95%D7%95%D7%90%D7%A6%D7%90%D7%A4.png?alt=media&token=f2947632-ac4e-48fb-9a93-ae2504fc793d",
 word: "Whatsapp"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%98%D7%95%D7%95%D7%99%D7%98%D7%A8.png?alt=media&token=d208f4e8-72b2-4ff2-842c-7c0df096d95b",
 word: "Twitter"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%A1%D7%A7%D7%99%D7%99%D7%A4.png?alt=media&token=6bf1c325-6acc-4c6b-a215-c2150e57c980",
 word: "skipe"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%A4%D7%99%D7%99%D7%A1.png?alt=media&token=68289d62-1b0d-4a53-8964-3632c9b62f22",
 word: "facebook"
 }
 ]
 }
 vegetables(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%90%D7%91%D7%95%D7%A7%D7%93%D7%95.png?alt=media&token=b97c7e97-f323-47da-ac82-ca2bc9ee90fd",
 word: "an avocado"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%92%D7%96%D7%A8.png?alt=media&token=e437eccc-55f3-4dd1-846d-10c8d6b59bea",
 word: "a carrot"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%97%D7%A1%D7%94.png?alt=media&token=fcf32ce3-294a-47d8-b0d4-aee77e4b7a88",
 word: "a lettuce"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%9B%D7%A8%D7%95%D7%91.png?alt=media&token=e33ad681-d23d-4e43-b2b1-d8c28bf4be63",
 word: "a cabbage"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%9C%D7%99%D7%9E%D7%95%D7%9F.png?alt=media&token=51cf1d07-4301-4e51-991c-2de8129907f3",
 word: "a lemon"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%9E%D7%9C%D7%A4%D7%A4%D7%95%D7%9F.png?alt=media&token=b8fb57aa-2df0-4f83-8f55-fa760b720a8e",
 word: "a cucumber"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%A2%D7%92%D7%91%D7%A0%D7%99%D7%94.png?alt=media&token=98771ad8-3bae-490e-a8f9-f638a1f38dff",
 word: "a tomato"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%A2%D7%A0%D7%91%D7%99%D7%9D.png?alt=media&token=8b076d32-aff0-4aa7-a551-ae185b3b7926",
 word: "grapes"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%A4%D7%9C%D7%A4%D7%9C.png?alt=media&token=2021c274-47c7-4642-a5f9-c7ee4ce2f895",
 word: "a gamba"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%A4%D7%AA%D7%9C.png?alt=media&token=6e7912be-3e1d-4150-95b4-ac8806d58f86",
 word: "a raspberry"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/vegetables%2F%D7%AA%D7%99%D7%A8%D7%A1.png?alt=media&token=d522883d-a0bb-4a77-9a22-68da08b0c7e1",
 word: "corn"
 },
 ]
 }
 numbers(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F0.png?alt=media&token=ff2147cc-6a9e-4712-ba08-aedcc377ce47",
 word: "0"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F1.png?alt=media&token=2d36975f-0f8d-4152-aea1-58f3cec51cca",
 word: "1"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F0.png?alt=media&token=ff2147cc-6a9e-4712-ba08-aedcc377ce47",
 word: "2"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F0.png?alt=media&token=ff2147cc-6a9e-4712-ba08-aedcc377ce47",
 word: "3"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F4.png?alt=media&token=644a0003-a7b6-48c1-ab58-50f155a90b2d",
 word: "4"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F5.png?alt=media&token=22f19f7f-3637-4451-8d8f-ed06b34f2c65",
 word: "5"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F6.png?alt=media&token=f7054568-6a76-4a27-a25f-c93df57bf38e",
 word: "6"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F7.png?alt=media&token=2826276b-0fd7-45aa-b9b1-eaef30dc28e5",
 word: "7"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F8.png?alt=media&token=642739bf-fc08-4b35-a740-c0e50389ce6b",
 word: "8"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Numbers%2F9.png?alt=media&token=3e95cbba-7baa-4071-b27d-8f1fc7158d81",
 word: "9"
 }
 ]
 }
 vehicle(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F171253.svg?alt=media&token=7aba6900-f672-458f-ae68-dc550bf1847c",
 word: "a bicycle"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F364589.svg?alt=media&token=3fb64362-0630-4f6e-84ce-df8aab4da297",
 word: "an ambulance"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F416597.png?alt=media&token=bf771cf9-355c-445f-8a6f-e225714ff4c0",
 word: "a bus"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579214.svg?alt=media&token=d85335b1-993c-4d85-96b8-9497fac542b9",
 word: "a helicopter"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579231.svg?alt=media&token=21d81566-b330-470f-91c5-18314900ee03",
 word: "a police"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579235.svg?alt=media&token=dbd73dbe-4c99-4aaa-a498-80de6f4f76a3",
 word: "a car"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579238.svg?alt=media&token=79147462-d788-48c8-b3c3-acdc8bbe669a",
 word: "a truck"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579254.svg?alt=media&token=9e792835-0bae-40ee-903b-eedde83fe4e8",
 word: "a ship"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579255.svg?alt=media&token=ec4422a4-ca72-485f-9f82-ac847a0fe18b",
 word: "a scooter"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579266.svg?alt=media&token=2abee3b7-3a3e-4024-8e33-5cdde4354874",
 word: "a boat"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F579268.svg?alt=media&token=64ceb639-d6dd-4dd6-9449-d77479466bd7",
 word: "a plane"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Vehicle%2F619202.svg?alt=media&token=0bf55c39-6302-445c-8566-3b5b0d64751d",
 word: "a firefighters"
 }
 ]
 }
 fruits(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F010_008_apple_fruit_food-512.png?alt=media&token=1600b9dc-210b-41de-a6db-e93ebd4f13b5",
 word: "an apple"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F135542.svg?alt=media&token=cecffdb3-f76b-4bc1-bfaa-bcf6dc1f9415",
 word: "a grapes"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F135642.svg?alt=media&token=5e0c0163-2e2f-4bb5-a108-60f9d42a222f",
 word: "a pomegranate"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F135739.svg?alt=media&token=015f0813-c0db-436b-8185-f432967bc8f4",
 word: "a watermelon"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F167263.svg?alt=media&token=46a6750a-249e-4564-8c16-aab143f801aa",
 word: "a cherries"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F579117.svg?alt=media&token=977ffd1c-8917-4983-864a-84990c9a1563",
 word: "a coconut"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2F590772.svg?alt=media&token=2d68e886-3e9f-402a-bd97-a05f98c3d1a5",
 word: "a strawberries"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2Ffood_banana-512.png?alt=media&token=1f50db30-fe4f-4487-9097-644fab66d5b6",
 word: "a banana"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2Ffood_orange-512.png?alt=media&token=bd6d936d-b5f4-4db6-815d-bfc0d508a75f",
 word: "an orange"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Fruits%2Ffood_pineapple-512.png?alt=media&token=b883c5ff-9448-4664-992f-acbeec7e0cb3",
 word: "a pineapple"
 }
 ]
 }
 verbs(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%91%D7%91%D7%A7%D7%A9%D7%94.svg?alt=media&token=063ea787-812b-4ca7-b875-0c2a3cb856ac",
 word: "please I want"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%98%D7%9C%D7%A4%D7%95%D7%9F.svg?alt=media&token=2d475540-a7f4-4d06-895b-24c4ca4bcaee",
 word: "to speak on the phone"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%90%D7%9B%D7%95%D7%9C.png?alt=media&token=1e4233a5-669c-4dc3-b3e6-3313b8f08809",
 word: "to eat"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%98%D7%99%D7%99%D7%9C.png?alt=media&token=c035d53c-6e38-46d9-b177-de75a2545ff9",
 word: "to travel"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%99%D7%A9%D7%95%D7%9F.svg?alt=media&token=5df58ab7-17f4-4652-9c8f-69aaf562cfb6",
 word: "to sleep"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F000069-walking-234.png?alt=media&token=7df6039b-cb8c-49c8-a7e1-140d8a961bb3",
 word: "to go"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A6%D7%99%D7%99%D7%A8.svg?alt=media&token=96a13dea-7af2-4937-9c34-d7ef4648d07c",
 word: "to draw"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A7%D7%A0%D7%95%D7%AA.png?alt=media&token=11616e05-e983-411b-8f78-915b1563b84d",
 word: "to buy"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A7%D7%A8%D7%95%D7%90.svg?alt=media&token=7c88fe05-a193-48ec-815d-7490c7c88525",
 word: "to read"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A8%D7%95%D7%A5.png?alt=media&token=62c55359-45d8-4cfd-a1e2-b87fb2252504",
 word: "to run"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A9%D7%91%D7%AA%20%D7%A2%D7%9C%20%D7%A1%D7%A4%D7%A1%D7%9C.svg?alt=media&token=2098d540-650b-46f0-8176-1d995cb12124",
 word: "to sit"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A9%D7%97%D7%95%D7%AA.png?alt=media&token=656f3a8c-3ee8-41ad-8fa3-132296d41db6",
 word: "to swim"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9E%D7%A9%D7%97%D7%A7%20%D7%9B%D7%93%D7%95%D7%A8.png?alt=media&token=8b71996e-bb45-40c3-857f-5514fb9e01b8",
 word: "to play in ball"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A9%D7%97%D7%A7.svg?alt=media&token=173e7c7e-a410-48d3-8b13-ef843656a72c",
 word: "to play"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%9E%D7%95%D7%96%D7%99%D7%A7%D7%94.svg?alt=media&token=5e6d9fd9-5b2e-4066-bcf3-a71e2159980b",
 word: "to listen to music"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A9%D7%AA%D7%95%D7%AA.png?alt=media&token=ca5711a1-8968-46da-8619-d037708654b4",
 word: "to drink"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2Fdance.png?alt=media&token=b2cb6dd9-0f3e-4e35-97b9-82ce61c1eb95",
 word:"to dance"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2Fear%202.jpg?alt=media&token=606a88f3-040b-42c4-b8dd-154d85778570",
 word:"to ear"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2Fup%20stairs.svg?alt=media&token=398b42f7-45f9-44a9-bc1c-aab36621e27b",
 word:"go upstairs"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A8%D7%9B%D7%91%20%D7%A2%D7%9C%20%D7%90%D7%95%D7%A4%D7%A0%D7%99%D7%9D.png?alt=media&token=f8586d97-20e3-4065-8e6b-8f8ba9e3a24b",
 word:"ride a bike"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9C%D7%A8%D7%9B%D7%91%20%D7%A2%D7%9C%20%D7%A1%D7%95%D7%A1.png?alt=media&token=4338c304-2250-4377-897a-e296e1760977",
 word:"ride a horse"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2Fsee.png?alt=media&token=0dd6d962-982c-4e0f-9220-8e89efa84587",
 word:"to see"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2FCapture.PNG?alt=media&token=48fd5ebe-987c-4f55-8293-f760947ae610",
 word:"throw away"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2Fto%20take%20a%20picuter.svg?alt=media&token=f25b998f-ae69-40d3-9d35-54ce9bbb373e",
 word:"to take a pictures"
 },
 {
 img:"https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%A4%D7%A2%D7%9C%D7%99%D7%9D%2F%D7%9B%D7%AA%D7%99%D7%91%D7%94.jpg?alt=media&token=713fca58-4f45-4418-a85b-f8d3c99872d2",
 word:"to write"
 }
 ]
 }

 Stationery(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%20%D7%9B%D7%AA%D7%99%D7%91%D7%94%2F%D7%98%D7%95%D7%A9.svg?alt=media&token=1f215153-0162-4b80-857d-4c827574f00b",
 word: "a marker"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%20%D7%9B%D7%AA%D7%99%D7%91%D7%94%2F%D7%9E%D7%97%D7%93%D7%93.svg?alt=media&token=f906df61-a2ae-4e2a-b1fe-a6009f5b6304",
 word: "a sharpener"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%20%D7%9B%D7%AA%D7%99%D7%91%D7%94%2F%D7%9E%D7%A1%D7%A4%D7%A8%D7%99%D7%99%D7%9D.svg?alt=media&token=0f3dcfc5-f525-4a3d-98b7-afd69459bd12",
 word: "scissors"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%20%D7%9B%D7%AA%D7%99%D7%91%D7%94%2F%D7%A1%D7%A8%D7%92%D7%9C.svg?alt=media&token=5fadb8e5-3a0e-489d-9417-53f07b8b14ae",
 word: "a ruler"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%20%D7%9B%D7%AA%D7%99%D7%91%D7%94%2F%D7%A2%D7%99%D7%A4%D7%A8%D7%95%D7%9F.svg?alt=media&token=8aaafe0a-c12b-4dc7-b0c3-01a2b7bafc32",
 word: "a pencil"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9E%D7%9B%D7%A9%D7%99%D7%A8%D7%99%20%D7%9B%D7%AA%D7%99%D7%91%D7%94%2F%D7%93%D7%91%D7%A7.png?alt=media&token=fffa0ad8-a9d5-4c37-a315-5330a9448cf5",
 word: "a glue"
 }
 ]
 }

 attributes(): void {
 this.imgs = [
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2F%D7%99%D7%9E%D7%99%D7%A0%D7%94.png?alt=media&token=3530c4cc-70e3-4d9f-8023-1a6145c57ddc",
 word: "right"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2F%D7%A9%D7%9E%D7%90%D7%9C%D7%94.png?alt=media&token=c08af6b2-bb41-4635-8959-50395d2bfbe6",
 word: "left"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2F%D7%9C%D7%9E%D7%A2%D7%9C%D7%94.png?alt=media&token=c41f7c9e-9209-4bd2-aeb1-3911fb735ebf",
 word: "up"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2F%D7%9C%D7%9E%D7%98%D7%94.png?alt=media&token=d0d9345e-4f06-4526-af5c-5469d8d86864",
 word: "down"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Fback.JPG?alt=media&token=c8a83585-eb27-4a0c-b408-0ead2b32eadd",
 word: "back"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Fabove.JPG?alt=media&token=2cd12ddd-4983-4469-b266-9989ebfe9ad8",
 word: "above"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Fbehind.JPG?alt=media&token=7725ef56-e17c-4ded-9f5c-c1c587162101",
 word: "behind"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Faround.JPG?alt=media&token=7032465b-6873-409c-810d-60376f2d1529",
 word: "around"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Fand.JPG?alt=media&token=e6220712-3dbd-44b4-acf6-516401f331b6",
 word: "and"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Finside.png?alt=media&token=105bf69b-12b7-46ca-85dd-d58a57e84b84",
 word: "inside"
 },
 {
 img: "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/%D7%9B%D7%99%D7%95%D7%95%D7%A0%D7%99%D7%9D%2Foutside.png?alt=media&token=c3bcb843-279b-491c-8fe0-174c32405803",
 word: "outside"
 }
 ]
 }
 
 ngOnInit() {
 }
 add(): void {
 let dialogRef = this.dialog.open(AddContactDialog, {
 width: '370px',
 height: '470px',
 data: { name: this.name, phone: this.phone }
 });
 
 dialogRef.afterClosed().subscribe(result => {
 console.log('The dialog was closed');
 if (result) {
 let u = new contact({ ContactName: result.name, ContactPhone: result.phone });
 this.fs.addContact(u).then(id=>{
 let contact = this.as.addContact(u);
 this.fs.updateUser(contact);
 })
 }
 });
 }
 }

