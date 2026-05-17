import React from 'react'

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">

        <h1 style={{"color": "#2A8E9E"}}>Welcome Back</h1>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>

        <button className="btn btn-primary w-100">Login</button>

      </div>
    </div>
  )
}

export default Login