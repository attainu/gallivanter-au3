import React from 'react'
import {NavLink , Link } from 'react-router-dom'
function NavBar() {
    return (
<React.Fragment>
            <nav className="navbar navbar-default sticky-top  ftco-navbar-light navbar-expand-lg navbar-light bg-dark">
    <div className='container'>
  <Link className="navbar-brand text-white font-weight-bolder" to="/">Gallivanter's <i>Tale</i></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink activeClassName='active' className="nav-link text-white" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link text-white" to="/articles">Articles</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link text-white" to="/team">Team</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeClassName='active' className="nav-link text-white" to="/contact" >Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

</React.Fragment>
    )
}

export default NavBar
