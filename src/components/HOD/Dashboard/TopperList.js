import React from 'react'
import "./StudentAchievementsHOD.css"

function TopperList() {
  return (
   <>
        <div className="TopperList">
        <div className="fideo">
          <h3 className="fidoh3">Student Achievements</h3>
          <table>
            <tr>
              <th>Sr no.</th>
              <th>Student Name</th>
              <th>Percentage</th>
              <th>Academic Year</th> 
            </tr>
            <tr>
              <td>1.</td>
              <td>Pranav Keshav Shelke</td>
              <td>99.99</td>
              <td>First Year</td>
            </tr>
          </table>
        </div>
      </div>
   </>
  )
}

export default TopperList