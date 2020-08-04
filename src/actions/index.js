import * as actionTypes from './types';

export const setFname = fname =>{
    return{
        type: actionTypes.SET_FNAME,
        payload:{
            fname: fname
        }
    }
}

export const setLname = lname =>{
    return{
        type: actionTypes.SET_LNAME,
        payload:{
            lname: lname
        }
    }
}

export const setEmail = email =>{
    return{
        type: actionTypes.SET_EMAIL,
        payload:{
            email: email
        }
    }
}

export const setPassword = password =>{
    return{
        type: actionTypes.SET_PASSWORD,
        payload:{
            password: password
        }
    }
}