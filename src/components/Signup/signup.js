import React, { useState } from "react";
import "./signup.css";

function SignUpForm() {

  const [ user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    reEnterPassword: ""
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
    <>
      <div className="container mt-5 ">
        <form>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={ handleChange }
              className="form-control"
              placeholder="First name"
             
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              className="form-control"
              placeholder="Last name"
              onChange={ handleChange }
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="form-control"
              placeholder="Enter email"
              onChange={ handleChange }
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              className="form-control"
              placeholder="Enter password"
              onChange={ handleChange }
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="reEnterPassword"
              value={user.reEnterPassword}
              className="form-control"
              placeholder="Re-enter password"
              onChange={ handleChange }
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
