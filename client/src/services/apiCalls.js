import baseApi from './baseApi';
import {store} from '../redux/store/store';
const addCreator = (formData) =>{
    console.log("formData: ",formData)
    baseApi.post(`creator/addcreator`,formData)
    // .then(data => data.json())
    .then(res =>{
        console.log("Added user: ",res);
        store.dispatch({
            type: "CREATOR_ADDED",
            data: res
        })
    })
    .catch(error => {
        console.log('user-create-error: ',error);
    })
}

export {
    addCreator
}