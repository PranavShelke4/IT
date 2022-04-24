/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import { Link } from "react-router-dom";
import "./StudentAchievementsHOD.css";

function StudentAchievementsHOD() {
  return (
    <>
      <div className="StudentAchievementsHOD">
        <div className="fideo">
          <h3 className="fidoh3">Student Achievements</h3>
          <table>
            <tr>
              <th>Sr no.</th>
              <th>Student Name</th>
              <th>Event Name</th>
              <th>Institute</th>
              <th>Academic Year</th> 
              <th>Date</th> 
              <th>Certificate</th> 
            </tr>
            <tr>
              <td>1.</td>
              <td>Pranav Keshav Shelke</td>
              <td>Quiz</td>
              <td>GPA</td>
              <td>First Year</td>
              <td>2/4/2019</td>
              <td>
              <a href="#">
                 <i class='bx bxs-file-doc'></i>
                </a>{" "}         
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentAchievementsHOD;
