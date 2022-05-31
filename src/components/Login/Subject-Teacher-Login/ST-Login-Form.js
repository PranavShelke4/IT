import React from "react";
import "./ST-Login-Form.css";
import { Link } from "react-router-dom";

function ST_Login_Form() {


function login(event){
  event.preventDefault();

  var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     console.log(email);

  if (email === "priyanka.kamdi@gmail.com" && password === "psghode@123") {
    window.location.href="/subject-teacher/priyanka-ghode/dashboard";
  }else if(email === "sneha.lakde11@gmail.com" && password === "sdraut@123"){
    window.location.href="/subject-teacher/sneha-raut/dashboard";
  }else if(email === "poonamfafat@gmail.com" && password === "pcfafat@123"){
    window.location.href="/subject-teacher/poonam-fafat/dashboard";
  }else if(email === "jyot.da29@gmail.com" && password === "jgdabhade@123"){
    window.location.href="/subject-teacher/jyoti-dabhade/dashboard";
  }else if(email === "bodheyog@gmail.com" && password === "yubodhe@123"){
    window.location.href="/subject-teacher/yogesh-bodhe/dashboard";
  }else if(email === "sheetalsutar13@gmail.com" && password === "sssutar@123"){
    window.location.href="/subject-teacher/sheetal-sutar/dashboard";
  }else if(email === "deep.rew@gmail.com" && password === "dnrewadkar@123"){
    window.location.href="/subject-teacher/deepak-rewadkar/dashboard";
  } else{
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
        {/* <button type="submit" className="login-btn">
          Login
        </button> */}
        <button type="submit" onClick={login} className="login-btn">Submit</button>
      </form>
      {/* <div className="w-100 text-center mt-1 color: alert">
        Don't have an account? <Link to="/SignUp">Sign Up</Link>
      </div> */}
    </div>
  );
}

export default ST_Login_Form;
