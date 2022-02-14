import React from 'react';
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

    <div className="ut">
      <span className="attend_label">Unit Tests</span>
    </div>

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