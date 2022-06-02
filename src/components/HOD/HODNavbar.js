import React from "react";
import "./HODNavbar.css";
import {Link} from 'react-router-dom';
import HODImg from '../../assets/img/hod.png'


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
            <Link to="/HOD/Dashbord">
              <i class="bx bx-home-alt"></i>
              <span class="link_name">Dashboard</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/HOD/Dashbord">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="#">
              <i class="bx bxs-user"></i>
                <span class="link_name">Faculty</span>
              </Link>
              <i onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link class="link_name" to="#">
                Faculty
                </Link>
              </li>
              <li>
                <Link to="/HOD/Faculty-Details">Faculty Details </Link>
              </li>
              <li>
                <Link to="/HOD/Faculty-CR">Faculty CR</Link>
              </li>
              <li>
                <Link to="/HOD/Facylty-Leave">Leaves</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/HOD/Assign-Class-Teacher" >
              <i class="bx bx-user-pin"></i>
              <span class="link_name">Assign Class Teacher</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/HOD/Assign-Class-Teacher">
                Assign Class Teacher
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
                <Link to="/HOD/FY-Students">First Year</Link>
              </li>
              <li>
                <Link to="/HOD/SY-Students">Second Year</Link>
              </li>
              <li>
                <Link to="/HOD/TY-Students">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <a target="_blank" href="https://drive.google.com/drive/folders/1NO1RQzRzgENYkR39ATLQHSbxZitzxSLP?usp=sharing">
              <i class="bx bx-notepad"></i>
              <span class="link_name">Result Analysis</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" target="_blank" href="https://drive.google.com/drive/folders/1NO1RQzRzgENYkR39ATLQHSbxZitzxSLP?usp=sharing">
                Result Analysis
                </a>
              </li>
            </ul>
          </li>

          
          <li>
            <div class="iocn-link">
              <Link to="">
                <i class="bx bx-spreadsheet"></i>
                <span class="link_name">Detention List</span>
              </Link>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link to="" class="link_name">
                Detention List
                </Link>
              </li>
              <li>
                <Link to="/HOD/FY-Detention">First Year</Link>
              </li>
              <li>
                <Link to="/HOD/SY-Detention">Second Year</Link>
              </li>
              <li>
                <Link to="/HOD/TY-Detention">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <div class="iocn-link">
              <Link to="">
                <i class="bx bx-comment-dots"></i>
                <span class="link_name">Feedback</span>
              </Link>
              <i  onClick={eventHandle} class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <Link to="" class="link_name">
                Feedback
                </Link>
              </li>
              <li>
                <Link to="/HOD/FY-Feedback">First Year</Link>
              </li>
              <li>
                <Link to="/HOD/SY-Feedback">Second Year</Link>
              </li>
              <li>
                <Link to="/HOD/TY-Feedback">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/HOD/My-Profile">
              <i class="bx bx-user-circle"></i>
              <span class="link_name">My Profile</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/HOD/My-Profile">
                  My Profile
                </Link>
              </li>
            </ul>
          </li>

         

          <li>
            <Link to="/">
              <i class="bx bx-log-out"></i>
              <span class="link_name">Logout</span>
            </Link>
            <ul class="sub-menu blank">
              <li>
                <Link class="link_name" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img alt="" src={HODImg} />
              </div>
              <div class="name-job">
                <div class="profile_name">Dr.D.N.Rewadkar</div>
                <div class="job">HOD of IT</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-section">
        <div class="home-content">
          <i class="bx bx-menu" onClick={eventHandle}></i>
          <span class="text">HOD Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default classTeacherNavbar;