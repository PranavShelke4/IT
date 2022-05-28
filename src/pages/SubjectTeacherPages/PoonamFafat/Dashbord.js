import React from 'react'
import FafatSubNavbar from "../../../components/SubjectTeacher/PoonamFafat/FafatSubNavbar";
import MySubject from "../../../components/SubjectTeacher/PoonamFafat/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
//import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/PoonamFafat/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <FafatSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;