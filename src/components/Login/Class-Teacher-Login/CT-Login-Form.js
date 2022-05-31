import React from "react";
import "./CT-Login-Form.css";
import { Link } from "react-router-dom";

function CT_Login_Form() {

  function CTlogin(event2){
    event2.preventDefault();
  
    var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       console.log(email);
  
    if (email === "priyanka.kamdi@gmail.com" && password === "psghode@123") {
      window.location.href="/class-teacher/SY/dashboard";
    }else if(email === "sneha.lakde11@gmail.com" && password === "sdraut@123"){
      window.location.href="/class-teacher/FY/dashboard";
    }else if(email === "poonamfafat@gmail.com" && password === "pcfafat@123"){
      window.location.href="/class-teacher/TY/dashboard";
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
          id="email"
          placeholder="Email ID / Username"
          autoFocus
          required
        />
        <label htmlFor="password">Password</label>
        <input 
         type="password" 
         name="password"
         id="password"
         placeholder="Enter Password"
         required />
        <a href="/">
          <p className="forgot">Forgot Password?</p>
        </a>
  
        <button type="submit" onClick={CTlogin} className="login-btn">Submit</button>
      </form>
      
    </div>
  );
}

export default CT_Login_Form;
