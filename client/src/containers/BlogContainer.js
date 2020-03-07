import React,{useEffect} from 'react'
import BlogBody from '../components/_BlogBody/BlogBody'
import {stateMapper} from '../redux/store/store';
import {connect} from 'react-redux';
function BlogContainer(props) {
    async function fetchData(){
        const res = await props.dispatch({
            type : "FETCH_BLOGS"
        })
        return res
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <BlogBody></BlogBody>
        </div>
    )
}

export default connect(stateMapper)(BlogContainer)
