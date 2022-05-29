import React from 'react'
import DabhdeSubNavbar from "../../../components/SubjectTeacher/JyotiDabhade/DabhdeSubNavbar";
import MySubject from "../../../components/SubjectTeacher/JyotiDabhade/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
//import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/JyotiDabhade/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <DabhdeSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;