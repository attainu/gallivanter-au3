import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/header.scss'
function BreadcrumHeader(props) {
    return (
        <React.Fragment>
                        <div className='container '>
                    <div className='row ml-md-3 no-gutters slider-text align-items-end justify-content-center ' style={{height:"100vh"}}>

            <div className='col-md-9 pb-5 text-center'>
                <h1 className ='mb-3 bread font-weight-bolder'>{props.headName}</h1>
                <p className='breadcrumbs'>
                    <span className='mr-2 '>
                        <Link className='text-light' to='/'>Home</Link>
                        <ion-icon name="caret-forward-outline"></ion-icon>
                    </span>
                    <span>
                        {props.linkName}
                        <ion-icon name="caret-forward-outline"></ion-icon>
                    </span>
                </p>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default BreadcrumHeader
