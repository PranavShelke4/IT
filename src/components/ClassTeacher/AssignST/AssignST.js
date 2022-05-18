/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import STData from "./STData";
import "./AssignST.css";

function AssignST(props) {
  return (
    <>
      <div className="facultysCR">
        <div className="fideo">
          <h3 className="fidoh3">Assign Class Teacher</h3>

          <h4 className="fidoh44">First Year</h4>

          {/* <select>
              <option>java</option>
              <option>cpp</option>
              <option>php</option>
          </select>

          <select>
              <option>java</option>
              <option>cpp</option>
              <option>php</option>
          </select> */}

<table>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {STData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.SrNo}</td>
                  <td>{item.Image}</td>
                  <td>{item.Name}</td>
                  <td>
                    <button onClick={() => {}} className="Assign">
                      Assign
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>


            
        </div> 

          <h4 className="fidoh44">Second Year</h4>
          <table>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {STData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.SrNo}</td>
                  <td>{item.Image}</td>
                  <td>{item.Name}</td>
                  <td>
                    <button onClick={() => {}} className="Assign">
                      Assign
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>

          <h4 className="fidoh44">Third Year</h4>
          <table>
            <tr>
              <th>Sr No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {STData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.SrNo}</td>
                  <td>{item.Image}</td>
                  <td>{item.Name}</td>
                  <td>
                    <button onClick={() => {}} className="Assign">
                      Assign
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          
        </div>

    </>
  );
}

export default AssignST;
