import React from 'react'
import RautSubNavbar from '../../../components/SubjectTeacher/SnehaRaut/RautSubNavbar';
import MySubject from "../../../components/SubjectTeacher/SnehaRaut/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
//import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/SnehaRaut/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <RautSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;