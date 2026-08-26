import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="auth-page login-page">
      <div className="auth-card login-container">
        <h1>Welcome Back</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label" htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-brand w-100 mt-2">Login</button>
        </form>

        <p className="text-center mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
