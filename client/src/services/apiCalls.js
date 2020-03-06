import baseApi from './baseApi';
import {store} from '../redux/store/store';
const addCreator = (formData) =>{
    console.log("formData: ",formData)
    baseApi.post(`/creator/addcreator`,formData)
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
const loginUser = (formData) => {
    console.log('api-login-data: ', formData)
    baseApi.post(`/creator/login`, formData)
    .then(res => {
        console.log("login-data-response: ", res.data);
        let user = {
           accessToken: res.data.token
         };
         localStorage.setItem("user", JSON.stringify(user));
    })
    .catch(error => console.log("error: ", error));
}
const getUserToken = () => {
    let user = localStorage.getItem("user");
    if(user) user = JSON.parse(user);
    return user.accessToken
}

const fetchUser = () => {
    const token = getUserToken();

    baseApi.get('/creator/',{
        "Authorization" : `bearer ${token}`
    })
    .then(res => {
        console.log("userData: ", res.data);
        store.dispatch({
            type: "USER_DATA",
            data: res.data.authData
        })
    })
    .catch(error => console.log("error: ", error));
}
const fetchBlog = () => {
    baseApi.get('/articles/')
    .then(res => {
        console.log("fetch-response: ",res.data);
        store.dispatch({
            type: "BLOGS_LOADED",
            data: res.data
        })
    })
    .catch(error => console.log("error: ", error));
}
const addBlog = (formData) => {
    baseApi.post(`/creator/articles`,formData)
    .then(res => {
        console.log("blog-added-api-res: ", res.data);
        store.dispatch({
            type: "BLOG_ADDED",
            data: res.data.postData
        })
    })
    .catch(error => console.log("error: ", error))
}
export {
    addCreator,
    loginUser,
    fetchBlog,
    fetchUser,
    addBlog
}