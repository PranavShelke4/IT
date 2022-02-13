/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./subNavbar.css";
import clglogo from "../../assets/icon/clg-logo.svg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";

function subNavbar() {
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand id="brandname">
            <img src={clglogo} /><h3 className="clgname">Government Polytechnic Awasari kh.</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Government Polytechnic Awasari kh.
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className="profile-details">
                  <div className="profile-content">
                    <img
                      className="photo"
                      src="https://www.gpawasari.ac.in/Images/ithod.PNG"
                    />
                  </div>
                  <div className="name-job">
                    <div className="profile_name">Dr. D.N. Rewadkar</div>
                    <div className="job">Head of Department I.T.</div>
                  </div>
                </div>
                <Nav.Link href="/subject-teacher-dashbord">
                  <i className="bx bx-home-alt"></i>Dashboard
                </Nav.Link>
                <NavDropdown
                  title="👨🏽‍🤝‍👨🏻 Students Details"
                  id="offcanvasNavbarDropdown"
                >
                  <NavDropdown.Item href="#action2">
                    First Year
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Second Year
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Third Year
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action5">
                  <i className="bx bx-book"></i>Course
                </Nav.Link>
                <Nav.Link href="#action6"><i class='bx bx-file-find' ></i>CPP Project</Nav.Link>
                <NavDropdown title="👨🏽‍🤝‍👨🏻 Time Table" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action7">
                    First Year
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8">
                    Second Year
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action9">
                    Third Year
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action10"><i class='bx bx-food-menu' ></i>Teaching / Lab Plan </Nav.Link>
                <Nav.Link href="#action11"><i class='bx bx-spreadsheet' ></i>MSBTE Result</Nav.Link>
                <NavDropdown title="👨🏽‍🤝‍👨🏻 My Details" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action12">
                    CR
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action13">
                    Profile
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action15">
                  <i className="bx bxs-comment-detail"></i>Leaves
                </Nav.Link>
                <Nav.Link href="/">
                  <i className="bx bx-log-out"></i>Log out
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <div className="sidebar close">

                <div className="logo-details">
                <img className="gpa_logo" src="https://www.gpawasari.ac.in/Images/logo.PNG" />
                <span className="logo_name">GPA</span>
                </div>

                <ul className="nav-links">
            
                <li>
                    <a href="/">
                    <i className='bx bx-home-alt' ></i>
                    <span className="link_name">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">Dashboard</a></li>
                    </ul>
                </li>
            
                <li>
                    <div className="iocn-link">
                    <a href="/">
                        <i className='bx bx-user' ></i>
                        <span class="link_name">Teachers</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                    <li><a className="link_name" href="/">Teachers</a></li>
                    <li><a href="/">All Teachers</a></li>
                    <li><a href="/">Add Teachers</a></li>
                    <li><a href="/">Add class Teacher</a></li>
                    </ul>
                </li>
            
                <li>
                    <div className="iocn-link">
                    <a href="/">
                        <i className='bx bx-book-reader' ></i>
                        <span className="link_name">Students</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul className="sub-menu">
                    <li><a className="link_name" href="/">Students</a></li>
                    <li><a href="/">First Year</a></li>
                    <li><a href="/">Second Year</a></li>
                    <li><a href="/">Third Year</a></li>
                    </ul>
                </li>
            
                <li>
                    <a href="/">
                    <i className='bx bxs-book-content'></i>
                    <span className="link_name">Subject Teachers</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">Subject Teachers</a></li>
                    </ul>
                </li>
            
            
                <li>
                    <a href="/">
                    <i className='bx bx-book'></i>
                    <span className="link_name">My Subject</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">My Subject</a></li>
                    </ul>
                </li>
                
                <li>
                    <a href="/">
                    <i className='bx bx-file' ></i>
                    <span className="link_name">Detention List</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">Detention List</a></li>
                    </ul>
                </li>
            
                <li>
                    <a href="/">
                    <i className='bx bxs-comment-detail'></i>
                    <span className="link_name">Feedback</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">Feedback</a></li>
                    </ul>
                </li>
            
                <li>
                    <a href="/">
                    <i className='bx bx-cog' ></i>
                    <span className="link_name">Setting</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">Setting</a></li>
                    </ul>
                </li>
            
                <li>
                    <a href="/">
                    <i className='bx bx-log-out' ></i>
                    <span className="link_name">Logout</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a className="link_name" href="/">Logout</a></li>
                    </ul>
                </li>
            <li>
            
                <div className="profile-details">
                <div className="profile-content">
                    <img src="https://www.gpawasari.ac.in/Images/ithod.PNG" />
                </div>
                <div className="name-job">
                    <div className="profile_name">Dr. D.N. Rewadkar</div>
                    <div className="job">Head of Department I.T.</div>
                </div>
                <i className='bx bx-log-out' ></i>
                </div>

            </li>

        </ul>

            </div>
            <section class="home-section">
                <div class="home-content">
                <i class='bx bx-menu' ></i>
                <span class="text">Dashboard</span><br/>
                </div>
      </section>
     */}
    </>
  );
}

export default subNavbar;
