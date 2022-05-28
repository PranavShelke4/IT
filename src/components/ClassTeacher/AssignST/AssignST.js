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
          <h3 className="fidoh3">Assign Subject Teacher</h3>

          <h4 className="fidoh44">Management (MAN)</h4>

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

          <h4 className="fidoh44">Emerginig Trends in IT & Computer (ETI)</h4>
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

          <h4 className="fidoh44">Wireless And Mobile Network (WMN)</h4>
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

           <h4 className="fidoh44">Mobile Application Development (MAD)</h4>
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

          <h4 className="fidoh44">Web Based Application using PHP (WBP)</h4>
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
