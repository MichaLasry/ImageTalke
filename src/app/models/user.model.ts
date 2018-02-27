export class user{
    
        UserName:string;
        phone:string;
        //firstLogin: boolean = false;
        contactId:any[];

        constructor(user) {
            this.UserName=user.UserName;
            this.phone=user.phone;
        }   
}
