import React from 'react'
import Header from '../components/_Header/index'
import Footer from '../components/_Footer/Footer'
import HomeBlogContainer from '../containers/HomeBlogContainer'
function HomePage() {
    return (
        <div>
            <Header></Header>
            <section className='ftco-section'>
                <HomeBlogContainer></HomeBlogContainer>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default HomePage
