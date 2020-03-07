import {createStore, combineReducers} from "redux";
import CreatorReducer from "../reducers/CreatorReducer";
import SignInReducer from "../reducers/SignInReducer";
import GetBlogReducer from "../reducers/GetBlogReducer";
import GetUserReducer from "../reducers/GetUserReducer";
import AddBlogReducer from "../reducers/AddBlogReducer";
let rootReducers = combineReducers({
    creatorData: CreatorReducer,
    loginData: SignInReducer,
    blogData: GetBlogReducer,
    getUser: GetUserReducer,
    createBlog: AddBlogReducer
})

const store  = createStore(rootReducers);

store.subscribe(()=>{
    console.log("dispatched-item: ",store.getState());
})

let stateMapper = state => {
    return state
}
export { store, stateMapper };