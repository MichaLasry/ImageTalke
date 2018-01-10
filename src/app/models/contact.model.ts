export class contact{
    
        CotactName:string;
        ContactPhone:number;
        ContactImg:ImageData;

        constructor(contact) {
            this.CotactName=contact.CotactName;
            this.ContactPhone=contact.ContactPhone;
            this.ContactImg=contact.ContactImg;
        }   
}
