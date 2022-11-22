import { hash } from "bcryptjs"

class Users{
    username: string;
    password: any;
    constructor(username: string, password: string){
        this.username = this.verifyUsername(username)
        this.password = this.verifyPassword(password)
    }
    verifyUsername(username: string){
        if(username.length < 3){
            throw new Error("Username must be at least 3 characters long")
        }else{
            return username;
        }
    }

    async verifyPassword(password: string){
        if(password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)){
            const passwordHash = hash(password, 8);
            return passwordHash;
        }else{
            throw new Error("The password must consist of at least 8 characters, a number and a capital letter");
        }
    }
}

export { Users }