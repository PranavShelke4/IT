import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './subject.css';

  

function subject(){

    return (
        <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">

    <label className="s1">Javascript</label>
    <div className="attendance">
      <span className="attend_label">Attendance</span>
    </div>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut attend_label" variant="success" id="dropdown-basic">
          <span> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item href="/question-paper">Question Paper</Dropdown.Item>
          <Dropdown.Item href="/answer-key">Answer Key</Dropdown.Item>
          <Dropdown.Item href="#/ds-format">DS Format</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div>

    <div className="term_work">
      <span className="attend_label">Term Work</span>
    </div>

     <div className="learn">
      <span className="learn_label">Learning Materials</span>
    </div>
  </div>
  </div>
  </div>
  );
}

export default subject;