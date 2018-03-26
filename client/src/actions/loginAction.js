import { USER_LOGIN, LOGIN_URL } from '../constants/constant';
import axios from 'axios';

export const login =  (data,context) => (dispatch) => {
    axios.post(LOGIN_URL,data).then(res=>{
        if(res.data.data){
            localStorage.setItem('userDetails',JSON.stringify(res.data.data[0]));
            dispatch({
                type:USER_LOGIN,
                payload: res.data.data
            });
            context.history.push('/dashboard');
        }else{
            console.log("Invalid user details")
        }
        
    })
    .catch(error => {
        console.log(error)
    })
}