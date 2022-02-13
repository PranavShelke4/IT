import React from 'react'
import SubNavbar from '../../components/SubjectTeacher/subNavbar'
import MySubject from "../../components/SubjectTeacher/Dashboard/MySubject";
import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';

function Dashbord() {
  return (
    <>
        <SubNavbar/>
        <MySubject />
        <FideologyActivities />
        <LecturesInWeek/>
    </>
  )
}

export default Dashbord