import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import TourList from '../components/TourList';
function HomePage() {
    return (
        <div >
        <React.Fragment>
        <Navbar />
        <TourList />
        </React.Fragment>
      </div>
    )
}

export default HomePage
