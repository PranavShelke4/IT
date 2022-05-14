import React from "react";
import "./ST-Login-Form.css";
import { Link } from "react-router-dom";

function ST_Login_Form() {

  return (
    <div className="box">
      <form>
        <label htmlFor="email">Email ID / Username</label>
        <input
          type="email"
          name="email"
          placeholder="Email ID / Username"
          autoFocus
          required
        />
        <label htmlFor="password">Password</label>
        <input 
         type="password" 
         name="password"
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
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}

export default ST_Login_Form;
