import {addBlog} from '../../services/apiCalls';
const AddBlogReducer = (createBlog ={}, action) => {
    if(action.type === "ADD_BLOG"){
        addBlog(action.data)
    }
    if(action.type === "BLOG_ADDED"){
        createBlog = action.data
    }
    return createBlog
}
export default AddBlogReducer