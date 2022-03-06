import React from "react";
import "./subNavbar.css";
import {Link} from 'react-router-dom';

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

function subNavbar() {
  return (
    <div>
      <div class="sidebar close">
        <div class="logo-details">
          <img alt=""
            class="gpa_logo" 
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span class="logo_name">GPA</span>
        </div>
        <ul class="nav-links">
          <li>
            <Link to="/">
              <i class="bx bx-home-alt"></i>
              <span class="link_name">Dashboard</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="">
                <i class="bx bx-user"></i>
                <span class="link_name">Students</span>
              </Link>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link to="" class="link_name">
                Students
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
          </li>

          <li>
            <Link to="/course">
              <i class="bx bx-book"></i>
              <span class="link_name">Course</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/course">
                Course
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i class="bx bx-file-find"></i>
              <span class="link_name">CPP Project</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="Subject_Teachers.html">
                CPP Project
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="#">
              <i class="bx bxs-book-content"></i>
                <span class="link_name">Time Table</span>
              </Link>
              <i onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link class="link_name" to="#">
                Time Table
                </Link>
              </li>
              <li>
                <Link to="FY_Student.html">First Year</Link>
              </li>
              <li>
                <Link to="SY_Student.html">Second Year</Link>
              </li>
              <li>
                <Link to="TY_Student.html">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i class="bx bx-food-menu"></i>
              <span class="link_name">Teaching / Lab Plan</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="Subject_Teachers.html">
                 Teaching / Lab Plan
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i class="bx bx-spreadsheet"></i>
              <span class="link_name">MSBTE Result</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="#">
                MSBTE Result
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="#">
              <i class="bx bxs-user"></i>
                <span class="link_name">My Details</span>
              </Link>
              <i onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link class="link_name" to="#">
                My Details
                </Link>
              </li>
              <li>
                <Link to="FY_Student.html">CR</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/leave">
              <i class="bx bxs-comment-detail"></i>
              <span class="link_name">Leaves</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/leave">
                Leaves
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i class="bx bx-log-out"></i>
              <span class="link_name">Logout</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="#">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img alt="" src="https://www.gpawasari.ac.in/Images/ithod.PNG" />
              </div>
              <div class="name-job">
                <div class="profile_name">Dr. D.N. Rewadkar</div>
                <div class="job">Head of Department I.T.</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-section">
        <div class="home-content">
          <i class="bx bx-menu" onClick={eventHandle}></i>
          <span class="text">Subject Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default subNavbar;