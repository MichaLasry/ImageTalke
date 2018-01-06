export class user{
    
        username:string;
        phone:number;
        firstLogin: boolean = false;
        contact:any[];

        constructor(user) {
            this.username=user.username;
            this.phone=user.phone;
        }   
}
