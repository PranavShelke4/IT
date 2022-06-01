/* eslint-disable default-case */

import React from "react";
import "./LoginPage.css";
import loginIcon from "../../assets/icon/login-icon.svg";
import { Tab, Tabs } from "react-bootstrap";
import STLoginForm from "../../components/Login/Subject-Teacher-Login/ST-Login-Form";
import CTLoginForm from "../../components/Login/Class-Teacher-Login/CT-Login-Form"
import HODLoginForm from "../../components/Login/HOD-Login/HOD-Login-Form";

const LoginPage = () => {

  return (
    <div className="LoginPage">
      <h3 className="IT-MS">DEPARTMENTAL MIS SYSTEM</h3>
      <h5 className="GPA">GOVERNMENT POLYTECHNIC, AWASARI (KH)</h5>
      <img className="login-icon" src={loginIcon} alt="" />
      <h4 className="log">Login</h4>
      <div className="tabs">
        <Tabs
          defaultActiveKey="Subject-Teacher"
          transition={true}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab className="tabbb" eventKey="HOD" title="HOD">
            <HODLoginForm />
          </Tab>
          <Tab className="tabbb" eventKey="Class-Teacher" title="Class Teacher">
            <CTLoginForm />
          </Tab>
          <Tab
            className="tabbb"
            eventKey="Subject-Teacher"
            title="Subject Teacher"
          >
            <STLoginForm
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default LoginPage;
