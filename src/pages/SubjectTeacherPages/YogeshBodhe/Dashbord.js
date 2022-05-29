import React from 'react'
import BodheSubNavbar from '../../../components/SubjectTeacher/YogeshBodhe/BodheSubNavbar';
import MySubject from "../../../components/SubjectTeacher/YogeshBodhe/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
//import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/YogeshBodhe/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <BodheSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;