import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './subject.css';


function subject(){

    return (
        <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">

    <label className="s1">Javascript</label>
    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1Z_u2e43DTCcqVu94ZlK28AmcHntjzpeFreV3FIzQO8I/edit#gid=0'><div className="attendance">
      <span className="attend_label">Attendance</span>
    </div></a>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut" variant="success" id="dropdown-basic">
          <span className='attend_label1'> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item href="/question-paper">Question Paper</Dropdown.Item>
          <Dropdown.Item href="/answer-key">Answer Key</Dropdown.Item>
          <Dropdown.Item href="#/ds-format">DS Format</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1Z_u2e43DTCcqVu94ZlK28AmcHntjzpeFreV3FIzQO8I/edit#gid=0'><div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div></a>

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1Z_u2e43DTCcqVu94ZlK28AmcHntjzpeFreV3FIzQO8I/edit#gid=0'><div className="term_work">
      <span className="attend_label">Term Work</span>
    </div></a>

      <Dropdown>
        <Dropdown.Toggle className="learn " variant="success" id="dropdown-basic">
        <span className="learn_label">Learning Materials</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item href="/assignments">Assignments</Dropdown.Item>
          <Dropdown.Item href="/study-material">Study Materials</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
  </div>
  </div>
  );
}

export default subject;