import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddContactDialog } from "../dialog/add-contact-dialog/add-contact-dialog.componet";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  phone: string;
  imgUrl: string;
  imgs: string[];
  constructor(public router: Router, public dialog: MatDialog) { }

  contacts(): void {
    this.router.navigate(["contacts"]);
  }
  put_pic(imgUrl): void {
    document.execCommand('insertimage', false, imgUrl);

  }

  animals(): void {
    //jioh
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F311525.png?alt=media&token=ede92443-c234-4b39-a3a5-aef18a3cc7f1",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F352497.png?alt=media&token=e217bada-ac7c-43e1-b94c-5af7fc438039",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F355679.svg?alt=media&token=3af7e34c-0def-4c1e-96df-45df98c84a18",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616599.svg?alt=media&token=49ba9afe-2808-482b-ad66-17b0b1a798a5",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616710.png?alt=media&token=dc5b768b-bf63-4b1b-90ff-7f1ab417d2e8",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616720.png?alt=media&token=2cad27f1-bb5d-465d-895e-15b8ded36198",
    ]
  }
    food(): void {
    this.imgs = [
      "assets/food/choco.png",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F352497.png?alt=media&token=e217bada-ac7c-43e1-b94c-5af7fc438039",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F355679.svg?alt=media&token=3af7e34c-0def-4c1e-96df-45df98c84a18",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616599.svg?alt=media&token=49ba9afe-2808-482b-ad66-17b0b1a798a5",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616710.png?alt=media&token=dc5b768b-bf63-4b1b-90ff-7f1ab417d2e8",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Animals%2F616720.png?alt=media&token=2cad27f1-bb5d-465d-895e-15b8ded36198",
    ]
  }
  
  colors(): void {
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fazure.png?alt=media&token=1d706aac-a911-467a-9c48-ff35d9d50b17",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fblack.png?alt=media&token=82fea5a6-c32a-4d6c-87f1-c629a15a648d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fblue.png?alt=media&token=e755008c-627b-484c-8978-93c2928ce5a1",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fbown.png?alt=media&token=b3a12375-e336-4998-9b65-29c4f0072271",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fgold.png?alt=media&token=b787ec09-1f5d-46f8-90a2-2ef8cae3dae1",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fgreen.png?alt=media&token=0a62d1b8-b70f-4011-b3aa-84185de63bd1",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fgrey.png?alt=media&token=c3beeb17-f736-46ec-98ba-bbb9075b798d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Forange.png?alt=media&token=f6241f17-6b83-45cc-a90e-bc0ef770ee78",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fpink.png?alt=media&token=25be0e18-04a4-4ee6-a829-efb42571247b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fpurple.png?alt=media&token=37bac8ee-3218-4770-a3c3-55d8a131bcc5",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fred.png?alt=media&token=47703121-7768-4ba9-8ff3-b6330961d41b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fyellow.png?alt=media&token=2080ceea-34e6-463e-98f7-b0dc8b1d5500",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Colors%2Fmarkers.png?alt=media&token=faadd451-daba-40cc-9050-129645089486",
    ]
  }
  cookware(): void {
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F126840.svg?alt=media&token=1ca5d909-9420-4c4a-a5e4-cd55d251d7e3",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F126840.svg?alt=media&token=1ca5d909-9420-4c4a-a5e4-cd55d251d7e3",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F148128.svg?alt=media&token=ed843da3-6957-4f62-bfa7-d18d5096e700",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F148161.svg?alt=media&token=5f5d81e7-d0cc-45c5-8e2c-538722157c2d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F148206.svg?alt=media&token=035ecf3d-d4d2-4579-8eb7-2feb3424a30b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F150388.svg?alt=media&token=59f37f17-7b8b-4270-93ed-d864b9d3d3ea",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F150400.svg?alt=media&token=b78c0a19-9e11-4185-9a21-beea81133417",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F164481.svg?alt=media&token=e98fc219-06e6-4cea-9d2e-47b9692a0b31",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F186524.svg?alt=media&token=d4d5e375-e96e-4270-a715-33675f660ccc",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F187970.svg?alt=media&token=984e9a76-a4f3-493e-9d71-0970fdb55e75",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F189946.svg?alt=media&token=d80b234e-7d3f-4be9-9857-f923386223ac",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F204342.svg?alt=media&token=b1bff4ff-0f34-4bc7-a465-1dafd4292c9d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F204342.svg?alt=media&token=b1bff4ff-0f34-4bc7-a465-1dafd4292c9d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F456678.png?alt=media&token=28a8e50a-d38e-41c3-965d-62dfea974ba5",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F524492.svg?alt=media&token=3ed12e6d-f790-4c87-8393-17f2f62c5b36",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F607057.svg?alt=media&token=45cd1cf2-88a2-40f3-924e-79e07ad27612",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Cookware%2F621787.svg?alt=media&token=82a8bbcb-21a4-40e8-88c7-34202f6574db",
    ]
  }
  emotions(): void {
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F214225.svg?alt=media&token=d87ade8a-ce2c-4482-83d4-08dc1ba0a935",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F576803.svg?alt=media&token=c882f50d-edbb-458b-be20-b65d55680695", 
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F576827.svg?alt=media&token=93949206-1df5-4203-9346-b37d6db531d9", 
       "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F576866.svg?alt=media&token=b662792d-ec1b-4fc8-8fee-8101774cad40",
       "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Emotions%2F637556.svg?alt=media&token=3985cf5d-478d-4920-833d-1d3b214fe48d",
    ]
  }
  games(): void {
    this.imgs = [

    ]
  }
  housewares(): void {
    this.router.navigate(["housewares"]);
  }
  letters(): void {
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fa.png?alt=media&token=2162ebeb-3ae8-4c75-ab08-9a05e3a05aca",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fb.png?alt=media&token=bc2d2b8c-0d29-4504-aa8c-079998ff08a1",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fc.png?alt=media&token=918baaad-f7a2-4b38-857d-10712435640f",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fd.png?alt=media&token=489d2e9e-49f9-4bce-ae6d-f9e9b457a754",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fe%20(Custom).png?alt=media&token=28c1de4b-f947-46a1-b7d7-0f2a30618e6f",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Ff.png?alt=media&token=65ec3708-b634-4ce6-9f1d-55ada5c04f1f",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fg.png?alt=media&token=00df0f31-73d3-4a92-8ee4-7019f372fd18",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fh.png?alt=media&token=bc8a645a-395d-4326-b49f-623959dbfcb3",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fi.png?alt=media&token=5d29cdd3-f1e6-44ad-8d06-18ed9bdef9ee",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2FJC.png?alt=media&token=961b8ef2-25ea-4c42-af45-c7ac26b5401b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fk.png?alt=media&token=abf11305-c967-4556-a4bb-10f677b9caa9",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fl.png?alt=media&token=131580a6-a9d0-48b7-8cb8-64758c767ae8",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2FMC.png?alt=media&token=7933a85c-916f-4cf6-a65f-efa341496951",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fn.png?alt=media&token=3bf4160b-ddd6-491d-b088-d419e6689959",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fo.png?alt=media&token=0dc0ceb1-b67f-42ca-8a39-5e1efd5c5b5b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fp.png?alt=media&token=2289cf3f-b9fc-4749-9195-95f69c19082d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fq.png?alt=media&token=44083c37-a760-4593-902a-0855e56b252f",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fr.png?alt=media&token=ab0df89a-53ab-4303-acc8-6a9a28d4a8ac",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fs.png?alt=media&token=0c41ff93-f8c2-452b-91a7-dcf4f6856109",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Ft.png?alt=media&token=14942677-629d-4610-9f23-a32c965fabb2",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2FWC.png?alt=media&token=7dfce01d-aca5-4f51-8cc7-7f3246441f1e",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fx.png?alt=media&token=8c1f766b-e63a-4d66-ab36-19e0241b823e",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fy.png?alt=media&token=b65935af-cf7d-4fde-a35d-874205795119",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Letters%2Fz.png?alt=media&token=08354792-458f-414a-91da-de34216df796",
    ]
  }
  places(): void {
    this.router.navigate(["places"]);
  }
  shapes(): void {
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F571650.svg?alt=media&token=f206b85a-ca82-4427-b758-195ba8547040",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F123.png?alt=media&token=ebc34284-4546-4461-a26e-cd8e6638e6af",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F136362.svg?alt=media&token=8a502397-e537-4ea3-a4f3-0e1c7dafc5a3",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F232397.png?alt=media&token=880050e6-6755-40c7-83c4-f8f9515b1d57",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F414840.png?alt=media&token=c9d4635b-41fb-4b60-98a8-6035b5ec8341",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F571650.svg?alt=media&token=f206b85a-ca82-4427-b758-195ba8547040",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F123.png?alt=media&token=ebc34284-4546-4461-a26e-cd8e6638e6af",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F136362.svg?alt=media&token=8a502397-e537-4ea3-a4f3-0e1c7dafc5a3",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Shapes%2F262430.png?alt=media&token=4697e5c0-7417-4524-8b9d-1e4e62496e1b",
    ]
  }
  social(): void {
    this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%92%D7%A8%D7%9D.png?alt=media&token=5779182f-8e57-4ef5-b737-606189cdcd20",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%95%D7%95%D7%90%D7%A6%D7%90%D7%A4.png?alt=media&token=f2947632-ac4e-48fb-9a93-ae2504fc793d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%98%D7%95%D7%95%D7%99%D7%98%D7%A8.png?alt=media&token=d208f4e8-72b2-4ff2-842c-7c0df096d95b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%A1%D7%A7%D7%99%D7%99%D7%A4.png?alt=media&token=6bf1c325-6acc-4c6b-a215-c2150e57c980",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%A4%D7%99%D7%99%D7%A1.png?alt=media&token=68289d62-1b0d-4a53-8964-3632c9b62f22",
    ]
  }
  vegetables(): void {
    this.router.navigate(["vegetables"]);
  }
  vehicle(): void {
    //bhhygy
     this.imgs = [
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%92%D7%A8%D7%9D.png?alt=media&token=5779182f-8e57-4ef5-b737-606189cdcd20",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%95%D7%95%D7%90%D7%A6%D7%90%D7%A4.png?alt=media&token=f2947632-ac4e-48fb-9a93-ae2504fc793d",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%98%D7%95%D7%95%D7%99%D7%98%D7%A8.png?alt=media&token=d208f4e8-72b2-4ff2-842c-7c0df096d95b",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%A1%D7%A7%D7%99%D7%99%D7%A4.png?alt=media&token=6bf1c325-6acc-4c6b-a215-c2150e57c980",
      "https://firebasestorage.googleapis.com/v0/b/imagetalk-76424.appspot.com/o/Social_networks%2F%D7%A4%D7%99%D7%99%D7%A1.png?alt=media&token=68289d62-1b0d-4a53-8964-3632c9b62f22",
    ]
  }

  ngOnInit() {
  }
  add(): void {
    let dialogRef = this.dialog.open(AddContactDialog, {
      width: '380px',
      height:'620px',
      data: { name: this.name, animal: this.phone, imgUrl: this.imgUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {

      }
    });

  } 
}





