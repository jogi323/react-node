import { USER_SIGNUP, SIGNUP_URL } from '../constants/constant';
import axios from 'axios';

export const signUp = (data,context) => (dispatch) => {
    axios.post(SIGNUP_URL,data).then(res=> {
        if(res.data.data){
            dispatch({
                type:USER_SIGNUP,
                payload: res.data.data
            });
            context.history.push('/');
        }else if(res.data.code === 1) {
            console.log('user already registered')
        }
    })
    .catch(err => {
        console.log(err);
    })
};
