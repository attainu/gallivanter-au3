import React from 'react'
import HeaderContent from './HeaderContent';
import BreadcrumHeader from './BreadcrumHeader';

function SubHeader(props) {
    return (
        <React.Fragment>
            <div className='container '>
                    <div className='row ml-md-3 no-gutters slider-text align-items-center justify-content-start ' style={{height:"100vh"}}>
                        {props.breadName !== 'About' && props.breadName !== 'Contact'? <HeaderContent></HeaderContent>: <BreadcrumHeader headName={props.breadName} linkName ={props.linkName}></BreadcrumHeader>}


                </div>
            </div>
        </React.Fragment>
    )
}

export default SubHeader
