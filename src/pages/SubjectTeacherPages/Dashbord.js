import React from 'react'
import SubNavbar from '../../components/SubjectTeacher/subNavbar'
import MySubject from "../../components/SubjectTeacher/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../components/SubjectTeacher/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <SubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        <LecturesInWeek/>
    </>
  )
}

export default Dashbord;