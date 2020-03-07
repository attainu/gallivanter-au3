import { loginUser} from '../../services/apiCalls';
const SignInReducer = (loginData = {}, action) => {
    if(action.type === "USER_LOGIN"){
        console.log('login:', action.data);
        loginUser(action.data);
    }
    return loginData
}
export default SignInReducer;