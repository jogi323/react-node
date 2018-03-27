import { ALL_USERS } from '../constants/constant';

const initialState = {
    allUsers: []
};

export default function (state=initialState,action){
    switch(action.type){
        case ALL_USERS:
        return {
            ...state,
            allUsers: action.payload
        }
        default:
        return state;
    }
};