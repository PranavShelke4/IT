import React, { useState } from "react";
import "./ST-Login-Form.css";
import { Link } from "react-router-dom";

function ST_Login_Form() {

  const [ user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = e =>{
    console.log(e.target)
    const { name, value } = e.target

    setUser({
      ...user,
      [name]:value
    })
  }

  return (
    <div className="box">
      <form>
        <label htmlFor="email">Email ID / Username</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={ handleChange }
          placeholder="Email ID / Username"
          autoFocus
          required
        />
        <label htmlFor="password">Password</label>
        <input 
         type="password" 
         name="password"
         value={user.password}
         onChange={ handleChange }
         placeholder="Enter Password"
         required />
        <a href="/">
          <p className="forgot">Forgot Password?</p>
        </a>
        {/* <button type="submit" className="login-btn">
          Login
        </button> */}
        <button type="submit"  className="login-btn">Submit</button>
      </form>
      <div className="w-100 text-center mt-1 color: alert">
        Don't have an account? <Link to="/SignUp">Sign Up</Link>
      </div>
    </div>
  );
}

export default ST_Login_Form;
