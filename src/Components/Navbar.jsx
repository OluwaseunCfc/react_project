import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/' },
  { label: 'Customers', to: '/' },
  { label: 'Pricing', to: '/' },
  { label: 'Learn', to: '/' },
]

function Navbar() {
  return (
    /* expand-lg + a toggler that shows below lg keeps the two in sync
       (previously expand-sm with a d-lg-none toggler showed both states at once) */
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Finpay</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mb-2 mb-lg-0 flex-grow-1 justify-content-lg-center gap-lg-2 gap-xl-4">
            {links.map(({ label, to }) => (
              <li className="nav-item" key={label}>
                <NavLink className="nav-link" to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <Link to="/login">
              <button className="btn btn-brand-outline" type="button">Login</button>
            </Link>

            <Link to="/signup">
              <button className="btn btn-brand" type="button">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
