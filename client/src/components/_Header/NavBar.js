import React from 'react'

function NavBar() {
    return (
<React.Fragment>
            <nav className="navbar navbar-default ftco-navbar-light navbar-expand-lg navbar-light bg-dark">
    <div className='container'>
  <a className="navbar-brand text-white font-weight-bolder" href="#">Gallivanter's <i>Tale</i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Articles</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="#">Team</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link text-white" href="#" >Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</React.Fragment>
    )
}

export default NavBar
