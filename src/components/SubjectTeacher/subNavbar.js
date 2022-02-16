/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./subNavbar.css";

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
          <img
            class="gpa_logo"
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span class="logo_name">GPA</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#">
              <i class="bx bx-home-alt"></i>
              <span class="link_name">Dashboard</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="HOD_Dashbord.html">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <a href="#">
                <i class="bx bx-user"></i>
                <span class="link_name">Students</span>
              </a>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                Students
                </a>
              </li>
              <li>
                <a href="/student-details">First Year</a>
              </li>
              <li>
                <a href="/student-details">Second Year</a>
              </li>
              <li>
                <a href="/student-details">Third Year</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/course">
              <i class="bx bx-book"></i>
              <span class="link_name">Course</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="/course">
                Course
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-file-find"></i>
              <span class="link_name">CPP Project</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="Subject_Teachers.html">
                CPP Project
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <a href="#">
              <i class="bx bxs-book-content"></i>
                <span class="link_name">Time Table</span>
              </a>
              <i onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                Time Table
                </a>
              </li>
              <li>
                <a href="FY_Student.html">First Year</a>
              </li>
              <li>
                <a href="SY_Student.html">Second Year</a>
              </li>
              <li>
                <a href="TY_Student.html">Third Year</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-food-menu"></i>
              <span class="link_name">Teaching / Lab Plan</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="Subject_Teachers.html">
                 Teaching / Lab Plan
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-spreadsheet"></i>
              <span class="link_name">MSBTE Result</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                MSBTE Result
                </a>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <a href="#">
              <i class="bx bxs-user"></i>
                <span class="link_name">My Details</span>
              </a>
              <i onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                My Details
                </a>
              </li>
              <li>
                <a href="FY_Student.html">CR</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/leave">
              <i class="bx bxs-comment-detail"></i>
              <span class="link_name">Leaves</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="/leave">
                Leaves
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-log-out"></i>
              <span class="link_name">Logout</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img src="https://www.gpawasari.ac.in/Images/ithod.PNG" />
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
          <span class="text">Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default subNavbar;