import { USER_LOGIN } from '../constants/constant';

const initialState = {
    userDetails: []
};

export default function (state=initialState,action){
    switch(action.type){
        case USER_LOGIN:
        return {
            ...state,
            userDetails: action.payload
        }
        default:
        return state;
    }
};
