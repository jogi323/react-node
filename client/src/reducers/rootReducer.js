import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';
import SignupReducer from './SignupReducer';
import AllReducer from './AllReducers';

const RootReducer = combineReducers({
    login: loginReducer,
    signup: SignupReducer,
    all: AllReducer
});

export default RootReducer;