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
        <Tabs
          defaultActiveKey="Sales_Distributors"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab
            className="tab w-100 justify-content-center"
            eventKey="Sales_Distributors"
            title="Sales & Distributors"
          >
            
          </Tab>
          <Tab
            className="tab"
            eventKey="Contact_request"
            title="Contact request"
          >
            
          </Tab>
          <Tab className="tab3" eventKey="Our_location" title="Our location">
            
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default LoginPage;
