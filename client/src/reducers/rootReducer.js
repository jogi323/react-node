import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const RootReducer = combineReducers({
    login: loginReducer
});

export default RootReducer;