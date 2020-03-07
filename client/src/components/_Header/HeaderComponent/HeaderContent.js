import React from 'react'
import { Link } from 'react-router-dom'

function HeaderContent() {
    return (
        <React.Fragment>
                    <div className='col-md-12'>
                        <h2 className='subHeading'>Hello! Welcome to</h2>
                        <h1 className='mb-4 mb-md-0'>Gallivanter's</h1>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='text text-white'>
                                    <p>Don’t bend; 
                                        don’t water it down; 
                                        don’t try to make it logical; 
                                        don’t edit your own soul according to the fashion. 
                                        Rather, follow your most intense obsessions mercilessly.</p>
                                    <div className="mouse">
                                        <Link to="#" className='mouse-icon'>
                                            <div className='mouse-wheel pt-5'>
                                                <span><ion-icon name="arrow-down-sharp"></ion-icon></span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default HeaderContent
