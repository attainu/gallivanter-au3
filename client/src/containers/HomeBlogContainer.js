import React,{useEffect} from 'react'
import {stateMapper} from '../redux/store/store';
import {connect} from 'react-redux';
import HomeBlog from '../components/_HomeBlog/HomeBlog';
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
            <HomeBlog></HomeBlog>
        </div>
    )
}

export default connect(stateMapper)(BlogContainer)
