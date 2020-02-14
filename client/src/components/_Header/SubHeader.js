import React from 'react'

function SubHeader() {
    return (
        <React.Fragment>
                    <div className='row ml-md-3 no-gutters slider-text align-items-center justify-content-start ' style={{height:"100vh"}}>
                    <div className='col-md-12'>
                        <h2 className='subHeading'>Hello! Welcome to</h2>
                        <h1 className='mb-4 mb-md-0'>Gallivanter's</h1>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='text text-white'>
                                    <p>Don’t bend; don’t water it down; don’t try to make it logical; don’t edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.</p>
                                    <div className="mouse">
                                        <a href="#" className='mouse-icon'>
                                            <div className='mouse-wheel'>
                                                <span><ion-icon name="arrow-down-sharp"></ion-icon></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}

export default SubHeader
