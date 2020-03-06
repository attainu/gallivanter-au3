import React from 'react'
import SignupForm from '../components/_Forms/SignupForm';
function CreatorSignup() {
    return (
        <React.Fragment>
        <div className='container-fluid signup-page p-3'>
            <div className="overlay"></div>
            <div className='row my-3'>
            <div className='col-md-2'></div>   
            <div className='col-md-8'>
                <SignupForm></SignupForm>
            </div>
            <div className='col-md-2'></div>
            </div>
        </div>

        </React.Fragment>
    )
}

export default CreatorSignup
