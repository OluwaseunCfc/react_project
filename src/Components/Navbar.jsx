import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container d-flex flex-grow-1 align-items-center">

        <Link className="navbar-brand me-3" to="/">Finpay</Link>

        <button
          className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">

          <ul className="navbar-nav d-flex flex-grow-1 justify-content-evenly">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Customers</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Learn</Link>
            </li>

          </ul>

          <Link to="/login">
            <button className="btn my-2 my-sm-0 me-2">Login</button>
          </Link>

          <Link to="/signup">
            <button className="btn my-2 my-sm-0">Sign Up</button>
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar