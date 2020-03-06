import React from 'react'
import Header from '../components/_Header/index'
import Contact from '../components/_Contact/Contact'
function ContactPage() {
    return (
        <React.Fragment>
            <Header breadName='Contact' linkName='Contact'></Header>
            <Contact></Contact>
        </React.Fragment>
    )
}

export default ContactPage
