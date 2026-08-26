import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="auth-page signup-page">
      <div className="auth-card signup-container" data-aos="fade-up">
        <h1>Join Finpay</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label" htmlFor="signup-name">Full Name</label>
            <input
              id="signup-name"
              type="text"
              className="form-control"
              placeholder="Full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-brand w-100 mt-2">Submit</button>
        </form>

        <p className="text-center mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
