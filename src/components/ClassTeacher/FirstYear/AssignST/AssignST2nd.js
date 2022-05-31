/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import STData from "./STData";
import "./AssignST.css";

function AssignST(props) {
  return (
    <>
      <div className="facultysCR">
        <div className="fideo">
          <h3 className="fidoh3">Assign Subject Teacher</h3>
          <Link to={'/class-teacher/FY/assign-1stSem'}><div className='add'>1st Sem</div></Link>
        </div>

          <h4 className="fidoh44">Applied Mathematics (M2)</h4>
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

          <h4 className="fidoh44">Basic Electronics (BEC)</h4>
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

          <h4 className="fidoh44">Business Communication using Computers (BCC)</h4>
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

           <h4 className="fidoh44">Elements of Electrical Engineering (EEC)</h4>
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

          <h4 className="fidoh44">Programming in C (PRC)</h4>
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

          <h4 className="fidoh44">Computer Peripheral and Hardware Maintenance (CPH)</h4>
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
          
          <h4 className="fidoh44">Web Page Application using HTML (WPD)</h4>
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
