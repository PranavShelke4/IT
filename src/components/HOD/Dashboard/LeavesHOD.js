/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Facultys.css";

function LeavesHOD() {
  return (
    <>
      <div className="LeavesHOD">
        <div className="fideo">
          <h3 className="fidoh3">Faculty Leaves</h3>

          <table>
            <tr>
              <th>Sr no.</th>
              <th>Faculty Name</th>
              <th>Leav From</th>
              <th>Leav To</th>
              <th>Leav Reason</th>
              <th>Action</th>
            </tr>

            <tr>
              <td>1.</td>
              <td>Pranav Shelke</td>
              <td>27-4-2022</td>
              <td>12-12-2022</td>
              <td>...</td>
              <td>
                <button className="AllowBTN">Allow</button> |
                 <button className="DenyBTN">Deny</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default LeavesHOD;
