import React from 'react'
import NavBar from './HeaderComponent/NavBar';
import '../../assets/header.scss';
import SubHeader from './HeaderComponent/SubHeader';
function Header(props) {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className='signup-page' style={{height: "100vh"}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <SubHeader breadName ={props.breadName} linkName={props.linkName}></SubHeader>
            </div>
        </React.Fragment>
    )
}

export default Header
