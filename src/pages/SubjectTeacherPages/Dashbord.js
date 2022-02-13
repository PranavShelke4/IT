import React from 'react'
import SubNavbar from '../../components/SubjectTeacher/subNavbar'
import MySubject from "../../components/SubjectTeacher/Dashboard/MySubject";
import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";



function Dashbord() {
  return (
    <>
        <SubNavbar/>
        <MySubject />
        <FideologyActivities />
    </>
  )
}

export default Dashbord