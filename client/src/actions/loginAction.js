import { USER_LOGIN, LOGIN_URL, ALERT_CONFIG } from '../constants/constant';
import axios from 'axios';
import Alert from 'react-s-alert';

export const login =  (data,context) => (dispatch) => {
    axios.post(LOGIN_URL,data).then(res=>{
        if(res.data.data){
            localStorage.setItem('userDetails',JSON.stringify(res.data.data[0]));
            dispatch({
                type:USER_LOGIN,
                payload: res.data.data
            });
            context.history.push('/dashboard/userdetails');
        }else{
            Alert.error("Invalid user details",ALERT_CONFIG);
            context.history.push('/');
        }
        
    })
    .catch(error => {
        Alert.error(error,ALERT_CONFIG);
        context.history.push('/');
    })
}