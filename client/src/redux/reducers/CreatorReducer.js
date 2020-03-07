import {addCreator} from '../../services/apiCalls';
const CreatorReducer = (creatorData = {}, action) => {
    switch(action.type){
        case "ADD_CREATOR":
            console.log("console-action-Data: ",action.data);
            addCreator(action.data);
        case "CREATOR_ADDED":
            creatorData = action.data;    
        default: return creatorData;
    }
}
export default CreatorReducer;