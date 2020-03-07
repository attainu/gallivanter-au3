import React from 'react'
import Header from '../components/_Header/index'
import BlogContainer from '../containers/BlogContainer'
function ArticlesPage() {
    return (
        <React.Fragment>
            <Header></Header>
            <section className="ftco-section bg-light">
            <BlogContainer></BlogContainer>
            </section>
        </React.Fragment>
    )
}

export default ArticlesPage
