import React from 'react'
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar'
import MyClassDetails from "../../components/ClassTeacher/Dashboard/myClassDetails";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../components/SubjectTeacher/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <ClassNavbar/>
        <MyClassDetails />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        <LecturesInWeek/>
    </>
  )
}

export default Dashbord;