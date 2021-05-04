import { user } from '~/types'

export interface LOGIN {
    type : typeof user.LOGIN,
    data : {
        email : String;
        password : String;
        passwordConfirm: String;
    }
}
export interface SETUSER {
    type: typeof user.SETUSER,
    data : any
}

export interface UserObject {
    uid : string;
    email?: string;
    displayName : string;
    phoneNumber?: string; 
    emailVerified : boolean;
    updateProfile : () => void;
  }