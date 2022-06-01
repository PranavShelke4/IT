import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './subject.css';


function subject(){

    return (
      <>
        <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">

    <label className="s1">Environmental Studies</label>
    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="attendance">
      <span className="attend_label">Attendance</span>
    </div></a>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut" variant="success" id="dropdown-basic">
          <span className='attend_label1'> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1dy_1i_fnujhUYWNuCtYWc2KtXJzvcSzQ?usp=sharing">Question Paper</Dropdown.Item>
          <Dropdown.Item rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1HYyOzdwsqy6Mh-k3qCLVnDGsiQWFboPf?usp=sharing">Answer Key</Dropdown.Item>
          <Dropdown.Item rel="noreferrer" target='_blank' href="#/ds-format">DS Format</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div></a>

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="term_work">
      <span className="attend_label">Term Work</span>
    </div></a>

      <Dropdown>
        <Dropdown.Toggle className="learn " variant="success" id="dropdown-basic">
        <span className="learn_label">Learning Materials</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item href="/assignments">Assignments</Dropdown.Item>
          <Dropdown.Item href="/subject-teacher/jyoti-dabhade/study-material">Study Materials</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
  </div>
  </div>

   <div className='subject-main'>
        <div className='sub_section'>
        <div className="sub sub1">

    <label className="s1 newS1">GUI Development using VB.Net</label>
    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="attendance">
      <span className="attend_label">Attendance</span>
    </div></a>

      <div>      
      <Dropdown>
        <Dropdown.Toggle className="ut" variant="success" id="dropdown-basic">
          <span className='attend_label1'> Unit Test</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1BRuVVbK5rqY8rjiHP24CmBAuVv-OBaxK?usp=sharing">Question Paper</Dropdown.Item>
          <Dropdown.Item rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1Ck44x-uQZcYQpCZj1pL50VZAraBpBWkP?usp=sharing">Answer Key</Dropdown.Item>
          <Dropdown.Item rel="noreferrer" target='_blank' href="#/ds-format">DS Format</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    {/* </div> */}

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="microproject">
      <span className="attend_label">Microprojects</span>
    </div></a>

    <a rel="noreferrer" target='_blank' href='https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0'><div className="term_work">
      <span className="attend_label">Term Work</span>
    </div></a>

      <Dropdown>
        <Dropdown.Toggle className="learn " variant="success" id="dropdown-basic">
        <span className="learn_label">Learning Materials</span>
        </Dropdown.Toggle>

      <Dropdown.Menu>
          <Dropdown.Item rel="noreferrer" target='_blank' href="https://drive.google.com/drive/folders/1VWj6xXjV7SHSigdpTC8LvWOd1hV_-bWY?usp=sharing">Assignments</Dropdown.Item>
          <Dropdown.Item rel="noreferrer" target='_blank' href="/subject-teacher/jyoti-dabhade/study-material">Study Materials</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
  </div>
  </div>

  </>
  );
}

export default subject;