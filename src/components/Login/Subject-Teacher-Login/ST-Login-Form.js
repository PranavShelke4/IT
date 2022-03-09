import React from 'react'
import "./ST-Login-Form.css"

function ST_Login_Form() {
  return (
    <div className="box">
      <form action="/subject-teacher-dashboard">
        <p>Email ID / Username</p>
        <input type="name" placeholder="Email ID / Username" />
        <p>Password</p>
        <input type="password" placeholder="Enter Password" />
        <a href="/">
          <p className="forgot">Forgot Password?</p>
        </a>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default ST_Login_Form