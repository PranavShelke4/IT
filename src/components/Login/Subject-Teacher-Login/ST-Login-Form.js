import React from 'react'
import "./ST-Login-Form.css"
import { Link } from "react-router-dom"


function ST_Login_Form() {
  return (
    <div className="box">
      <form action="/subject-teacher-dashboard">
        <p>Email ID / Username</p>
        <input type="email" placeholder="Email ID / Username" required />
        <p>Password</p>
        <input type="password" placeholder="Enter Password" required />
        <a href="/">
          <p className="forgot">Forgot Password?</p>
        </a>
        <button type="submit" className='login-btn'>
          Login
        </button>
      </form>
      <div className="w-100 text-center mt-1 color: alert">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  )
}

export default ST_Login_Form