import {createStore, combineReducers} from "redux";
import CreatorReducer from "../reducers/CreatorReducer";

let rootReducers = combineReducers({
    creatorData: CreatorReducer
})

const store  = createStore(rootReducers);

store.subscribe(()=>{
    console.log("dispatched-item: ",store.getState());
})

let stateMapper = state => {
    return state
}
export { store, stateMapper };