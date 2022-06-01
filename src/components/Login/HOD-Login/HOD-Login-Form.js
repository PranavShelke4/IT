import React from 'react'
import { Link } from "react-router-dom";


function HODLoginForm() {

  function CTlogin(event2){
    event2.preventDefault();
  
    var email = document.getElementById("HODemail").value;
       var password = document.getElementById("HODpassword").value;
       console.log(email);
  
    if (email === "deep.rew@gmail.com" && password === "dnrewadkar@123") {
      window.location.href="/HOD/Dashbord";
    }else{
     alert("Please enter valid information");
     return;
    }
  
  }

  
  return (
    <div className="box">
       <form>
        <label htmlFor="email">Email ID / Username</label>
        <input
          type="email"
          name="email"
          id="HODemail"
          placeholder="Email ID / Username"
          autoFocus
          required
        />
        <label htmlFor="password">Password</label>
        <input 
         type="password" 
         name="password"
         id="HODpassword"
         placeholder="Enter Password"
         required />
        <a href="/">
          <p className="forgot">Forgot Password?</p>
        </a>
  
        <button type="submit" onClick={CTlogin} className="login-btn">Submit</button>
      </form>
    </div>
  )
}

export default HODLoginForm