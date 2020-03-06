import { fetchBlog} from '../../services/apiCalls';
const BlogReducer = (blogData = [], action) => {
    if(action.type === "FETCH_BLOGS"){
        fetchBlog();
    }
    if(action.type === "BLOGS_LOADED"){
        blogData = action.data;
    }
    if(action.type === "CLEAR_BLOGS"){
        return blogData =[];
    }
    return blogData
}
export default BlogReducer;