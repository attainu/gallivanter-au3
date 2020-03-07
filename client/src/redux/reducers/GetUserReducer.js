import {fetchUser} from '../../services/apiCalls';
const getUserReducer = (getUser = {}, action) =>{
    if(action.type === "FETCH_USER"){
        fetchUser()
    }
    if(action.type === "USER_DATA"){
        getUser = action.data
    }
    return getUser
}
export default getUserReducer