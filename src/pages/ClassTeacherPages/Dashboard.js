import React from 'react'
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar'
import MySubject from "../../components/SubjectTeacher/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../components/SubjectTeacher/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <ClassNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        <LecturesInWeek/>
    </>
  )
}

export default Dashbord;