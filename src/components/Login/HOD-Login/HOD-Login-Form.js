import React from 'react'
import { Link } from "react-router-dom";


function HODLoginForm() {

  
  return (
    <div className="box">
      <form action="/HOD/Dashbord">
        <label>Email ID / Username</label>
        <input
          type="email"
          placeholder="Email ID / Username"
          autoFocus
          required
        />
       
        <label>Password</label>
        <input 
         type="password" 
         placeholder="Enter Password"
         required />
        <a href="/">
          <p className="forgot">Forgot Password?</p>
        </a>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <div className="w-100 text-center mt-1 color: alert">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  )
}

export default HODLoginForm