import { USER_SIGNUP } from '../constants/constant';

const initialState = {
    userSignupDetails: {}
};

export default (state=initialState, action) => {
    switch(action.type){
        case USER_SIGNUP: 
        return {
            ...state,
            userSignupDetails: action.payload
        };
        default:
        return state;
    }
};
