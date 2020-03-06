import React ,{useEffect} from 'react'
import BlogEditor from '../components/_BlogEditor/BlogEditor'
import Header from '../components/_Header'
import Footer from '../components/_Footer/Footer'
import {stateMapper} from '../redux/store/store'
import {connect} from 'react-redux'
function CreateBlog(props) {
    async function fetchUser(){
        const userData = await props.dispatch({
          type: "FETCH_USER"
        })
        return userData
      }
      useEffect(() => {
        fetchUser()
      },[])
    return (
        <div>
            <Header></Header>
            <BlogEditor></BlogEditor>
            <Footer></Footer>
        </div>
    )
}

export default connect(stateMapper)(CreateBlog)
