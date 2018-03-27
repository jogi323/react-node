import { USER_SIGNUP, SIGNUP_URL, ALERT_CONFIG } from '../constants/constant';
import axios from 'axios';
import Alert from 'react-s-alert';

export const signUp = (data,context) => (dispatch) => {
    axios.post(SIGNUP_URL,data).then(res=> {
        if(res.data.data){
            dispatch({
                type:USER_SIGNUP,
                payload: res.data.data
            });
            Alert.success("Registered successfully",ALERT_CONFIG);
            context.history.push('/');
        }else if(res.data.code === 1) {
            Alert.error("User already registered",ALERT_CONFIG);
        }
    })
    .catch(err => {
        Alert.error(err,ALERT_CONFIG);
    })
};
