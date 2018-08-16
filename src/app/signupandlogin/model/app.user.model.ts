export interface User {
    $key: string, //This is specifically for firebase
    id: number,
    emailID : string
    password : string
    userType : string,
    address : string,
    address2 : string,
    city : string,
    state : string,
    zipCode : string
}