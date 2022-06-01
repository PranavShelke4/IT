import React from 'react'
import GhodeSubNavbar from "../../../components/SubjectTeacher/PriyankaGhode/GhodeSubNavbar"
import MySubject from "../../../components/SubjectTeacher/PriyankaGhode/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
import LecturesInWeek from '../../../components/SubjectTeacher/PriyankaGhode/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/PriyankaGhode/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <GhodeSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;