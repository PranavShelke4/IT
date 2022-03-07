import React from "react";
import "./LoginPage.css";
import loginIcon from "../../assets/icon/login-icon.svg";
import { Tab, Tabs } from "react-bootstrap";
import ST_Login_Form from "../../components/Login/Subject-Teacher-Login/ST-Login-Form";

function LoginPage() {
  return (
    <div className="LoginPage">
      <h3 className="IT-MS">IT MANAGEMENT SYSTEM</h3>
      <h5 className="GPA">GOVERNMENT POLYTECHNIC, AWASARI (KH)</h5>
      <img className="login-icon" src={loginIcon} alt="" />
      <h4 className="log">Login</h4>
      <div className="tabs">
        
      </div>
    </div>
  );
}

export default LoginPage;
