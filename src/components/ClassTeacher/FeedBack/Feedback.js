import React from 'react';
import '../Students/students.css';
import { Link } from "react-router-dom";

function Feedback(){
    return (
        <section className="fy_section">
        <Link to={'/add-class-feedback-list'}><div className='add-student'>Add Feedback List</div></Link>
        <table className="ctTable">
        <tr>
          <th>Sr no.</th>
          <th>Year</th>
          <th>Faculty Name</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>2021</td>
          <td>Ms. P. S. Ghode</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>2.</td>
          <td>2020</td>
          <td>Ms. P. C. Fafat</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>3.</td>
          <td>2019</td>
          <td>Mr. Y. U. Bhode</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
      </table>
    </section>
  
    );
}

export default Feedback;