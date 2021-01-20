import { user } from '~/types'

export interface SETLOADING {
    type : typeof user.SETLOADING,
    data : any
}
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