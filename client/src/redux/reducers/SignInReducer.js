import { loginUser} from '../../services/apiCalls';
const SignInReducer = (loginData = {}, action) => {
    switch(action.type){
        case "USER_LOGIN":
            loginUser(action.data);
        default: return loginData;
    }
}
export default SignInReducer;