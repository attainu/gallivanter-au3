import baseApi from './baseApi';
import {store} from '../redux/store/store';
const addCreator = (formData) =>{
    console.log("formData: ",formData)
    baseApi.post(`creator/addcreator`,formData)
    // .then(data => data.json())
    .then(res =>{
        console.log("Added-user(API response-): ",res);
        store.dispatch({
            type: "CREATOR_ADDED",
            data: res.data.error ? res.data.error : res.data
        })
    })
    .catch(error => {
        console.log('user-create-error: ',error);
    })
}

export {
    addCreator
}