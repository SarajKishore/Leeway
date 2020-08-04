import {combineReducers} from 'redux';
import * as actionTypes from '../actions/types';

const initialFnameState={
    fname: 'Saraj',
    lname: 'Kishore',
    email: 'sarajkishore@gmail.com',
    password: '123',
}

const fname_reducer=(state= initialFnameState, action)=>{
    switch(action.type){
        case actionTypes.SET_FNAME:
            return{
                ...state,
                fname: action.payload.fname
            };
        case actionTypes.SET_LNAME:
            return{
                ...state,
                lname: action.payload.lname
            };
        case actionTypes.SET_EMAIL:
            return{
                ...state,
                email: action.payload.email
            };
        case actionTypes.SET_PASSWORD:
            return{
                ...state,
                password: action.payload.password
            };
        default:
            return state;
    }
}


const rootReducer= combineReducers({
    user: fname_reducer,
});

export default rootReducer;