import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
       <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand " to="/">BVM - TECH SOLUTION </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-4">
      <li className="nav-item active ml-5">
        <Link className="nav-Link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ml-5">
        <Link className="nav-Link" to="/about">About</Link>
      </li>
      <li className="nav-item ml-5">
        <Link className="nav-Link" to="/work">Services</Link>
      </li>
      <li className="nav-item ml-5">
      <Link className="nav-Link" to="/team">Team</Link>
      </li>
      <li className="nav-item ml-5">
      <Link className="nav-Link" to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item ml-5">
      <Link className="nav-Link" to="/contact">Contact-us</Link>
      </li>
      

    </ul>
  </div>
</nav>
       </>
    );
}
