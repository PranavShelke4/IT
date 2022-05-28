import React from 'react'
import SutarSubNavbar from "../../../components/SubjectTeacher/SheetalSutar/SutarSubNavbar"
import MySubject from "../../../components/SubjectTeacher/SheetalSutar/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
//import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/SheetalSutar/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <SutarSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;