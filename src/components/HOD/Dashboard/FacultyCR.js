import React from 'react'
import "./Facultys.css";
import { Link } from "react-router-dom";


function FacultyCR() {
  return (
    <>
         <div className="facultysCR">
        <div className="fideo">
          <h3 className="fidoh3">Faculty CR</h3>

            <table>
              <tr>
                <th>Sr no.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Qualification</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>More info</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>1.</td>
                <td>Pranav Keshav Shelke</td>
                <td>Male</td>
                <td>B.Tec</td>
                <td>8080054394</td>
                <td>Pranavshelke4@gmail.com</td>
                <td>
                  <Link to="/">
                    <i class="bx bxs-file-doc"></i>
                  </Link>{" "}
                </td>
              </tr>
            </table>

        </div>
      </div>
    </>
  )
}

export default FacultyCR