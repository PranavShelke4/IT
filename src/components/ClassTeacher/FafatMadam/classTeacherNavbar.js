import React from "react";
import "./classTeacherNavbar.css";
import {Link} from 'react-router-dom';
import FafatMadamimg from '../../../assets/img/fafat-madam.jpeg'


function eventHandle() {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

function classTeacherNavbar() {
  return (
    <div>
      <div className="sidebar close">
        <div className="logo-details">
          <img alt=""
            className="gpa_logo" 
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span className="logo_name">GPA</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/class-teacher/Fafat/dashboard">
              <i className="bx bx-home-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          {/* <li>
            <div class="iocn-link">
              <Link to="">
                <i class="bx bx-user"></i>
                <span class="link_name">Faculty</span>
              </Link>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link to="" class="link_name">
                Faculty
                </Link>
              </li>
              <li>
                <Link to="/student-details">First Year</Link>
              </li>
              <li>
                <Link to="/student-details">Second Year</Link>
              </li>
              <li>
                <Link to="/student-details">Third Year</Link>
              </li>
            </ul>
          </li> */}

          <li>
            <Link to="/class-teacher/Fafat/classfaculty">
              <i className="bx bxs-user"></i>
              <span className="link_name">Faculty</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/classfaculty">
                Faculty
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/class-teacher/Fafat/assign-5thSem">
              <i className="bx bx-file-find"></i>
              <span className="link_name">Assign Course</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/assign-5thSem">
                Assign Course
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="/class-teacher/Fafat/student-table">
              <i className="bx bxs-user"></i>
                <span className="link_name">Students</span>
              </Link>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/student-table">
                Students
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/class-teacher/Fafat/class-detentionlist">
              <i className="bx bx-food-menu"></i>
              <span className="link_name">Detention List</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/class-detentionlist">
                 Detention List
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className="bx bx-spreadsheet"></i>
              <span className="link_name">Result Analysis</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="#">
                Result Analysis
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="/class-teacher/Fafat/class-feedback">
              <i className="bx bxs-comment-detail"></i>
                <span className="link_name">Feedback</span>
              </Link>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/class-feedback">
                Feedback
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/class-teacher/Fafat/profile">
              <i className="bx bxs-user"></i>
              <span className="link_name">My Profile</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/class-teacher/Fafat/profile">
                My Profile
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">
              <i className="bx bx-log-out"></i>
              <span className="link_name">Logout</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img alt="" src={FafatMadamimg} />
              </div>
              <div className="name-job">
                <div className="profile_name">Miss. P. C. Fafat</div>
                <div className="job">Class Teacher</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={eventHandle}></i>
          <span className="text">Class Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default classTeacherNavbar;