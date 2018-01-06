export class contact{
    
        cotactname:string;
        contactphone:number;
        contactimg:ImageData;
        firstLogin: boolean = false;

        constructor(contact) {
            this.cotactname=contact.cotactname;
            this.contactphone=contact.contactphone;
            this.contactimg=contact.contactimg;
        }   
}
