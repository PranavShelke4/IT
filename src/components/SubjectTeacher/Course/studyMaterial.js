import React from 'react';
import './studyMaterial.css';
import {Link} from "react-router-dom";

function studyMaterial(){

    return (
        <section className="fy_section">
        <Link to="/add-material"><button className='addStudent_btn'>Upload</button></Link>
        <table className="ctTable">
        <tr>
          <th>Sr no.</th>
          <th>Year</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
        <tr>
          <td>1.</td>
          <td>2021</td>
          <td>Array Videos</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>2.</td>
          <td>2020</td>
          <td>Function videos</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
        <tr>
          <td>3.</td>
          <td>2019</td>
          <td>Data Structure</td>
          <td><a href='/student-detail'>www.google.com</a></td>
        </tr>
      </table>
    </section>
  
    );
}

export default studyMaterial;