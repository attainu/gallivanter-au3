import React from 'react'
import Header from '../components/_Header/index'
import BlogEditor from '../components/_BlogEditor/BlogEditor'
import { Link } from 'react-router-dom'

function TeamPage() {
    return (
        <React.Fragment>
            <Header breadName='About' linkName='Team'></Header>
            <h2 className='text-sm-center font-weight-bold m-5'> Become an Author</h2>
            <div className='d-flex justify-content-center m-2 p-3'>
            <Link to ='/signup'><button className='btn'>Click Here to Register</button></Link>

            </div>
            {/* <BlogEditor></BlogEditor> */}
        </React.Fragment>
    )
}

export default TeamPage
