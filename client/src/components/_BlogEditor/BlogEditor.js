import React ,{useState} from 'react'
import BlogEditorForm from '../_Forms/BlogEditorForm'
import {Redirect} from 'react-router-dom';
function BlogEditor() {
    const [isLoggedOut, setLoggedOut] = useState({
        logoutUser: false
      })
      const handleLogout = () => {
        localStorage.clear("user");
        setLoggedOut({...isLoggedOut, logoutUser: true});
      }
      if(isLoggedOut.logoutUser){
        return <Redirect to='/login'></Redirect>
      }
    return (
        <React.Fragment>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                    <button className='btn text-danger' onClick={handleLogout}>Logout</button>
                    </div>
                    <div className='col-md-8'>
                    <BlogEditorForm></BlogEditorForm>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogEditor
