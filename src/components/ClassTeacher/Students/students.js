import React from 'react';
import './students.css';
import { Link } from "react-router-dom";

function students(){
    return (
        <section className="fy_section">
        <Link to={'/add-student-list'}><div className='add-student'>Add Student List</div></Link>
        <table className="ctTable">
        <tr>
          <th>Sr no.</th>
          <th>Year</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>2021</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>2.</td>
          <td>2020</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>3.</td>
          <td>2019</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
      </table>
    </section>
  
    );
}

export default students;