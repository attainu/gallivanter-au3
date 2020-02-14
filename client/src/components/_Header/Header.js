import React from 'react'
import NavBar from './NavBar';
import '../../assets/header.scss';
import SubHeader from './SubHeader';
function Header() {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className='signup-page' style={{height: "100vh"}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className='container '>
                <SubHeader></SubHeader>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Header
