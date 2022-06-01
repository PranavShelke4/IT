import React from "react";
import "./MySubject.css";

function MySubject() {
  return (
    
      <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-left" id="row">
        <div className="sub1">
          <p className="subname">OOP</p>
          <p className="subcode">(22316)</p>
        </div>
        <div className="sub2">
          <p className="subname">DSU</p>
          <p className="subcode">(22317)</p>
        </div>
        {/* <div className="sub3">
          <p className="subname">Java Script</p>
          <p className="subcode">123</p>
        </div>
        <div className="sub4">
          <p className="subname">Java Script</p>
          <p className="subcode">123</p>
        </div>
        <div className="it">
            <h3>Information Technology</h3>
        </div> */}
      </div>

  );
}

export default MySubject;
