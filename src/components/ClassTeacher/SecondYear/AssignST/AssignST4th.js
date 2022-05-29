/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import STData from "../../ThirdYear/AssignST/STData";
import "./AssignST.css";

function AssignST4th(props) {
  return (
    <>
      <div className="facultysCR">
        <div className="fideo">
          <h3 className="fidoh3">Assign Subject Teacher</h3>
          <Link to={'/class-teacher/SY/assign-3rdSem'}><div className='add'>3rd Sem</div></Link>            
        </div> 

          <h4 className="fidoh44">Java Programming (JRP)</h4>
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

          <h4 className="fidoh44">Software Engineering (SEN)</h4>
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

           <h4 className="fidoh44">Database Management (DBMS)</h4>
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

          <h4 className="fidoh44">GUI using VB.Net (GAD)</h4>
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

          <h4 className="fidoh44">Computer Network (CNE)</h4>
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

export default AssignST4th;
