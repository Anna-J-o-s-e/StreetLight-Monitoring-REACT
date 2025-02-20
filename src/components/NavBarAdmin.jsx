import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavBar.css'; // Import the CSS file


const NavBarAdmin = () => {
  return (
    <div className='main-navbar'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="/">STREETLIGHT MONITORING SYSTEM</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">

    <li className="nav-item">
      <Link className="nav-link" to="/AddOrg">ADD EMPLOYEE</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/ViewUsers">VIEW USERS</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/ViewEmployees">VIEW EMPLOYEES</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/ViewFeedbackAdmin">VIEW FEEDBACK</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/ViewStreetlightAdmin">VIEW STREETLIGHT</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/">SIGN OUT</Link>
    </li>
  </ul>
</div>
</div>
</nav>
</div>
  )
}

export default NavBarAdmin