import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import SignupReducer from './SignupReducer';


const RootReducer = combineReducers({
    login: loginReducer,
    signup: SignupReducer
});

export default RootReducer;