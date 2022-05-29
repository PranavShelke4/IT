import React from 'react'
import RewadkarSubNavbar from "../../../components/SubjectTeacher/DeepakRewadkar/RewadkarSubNavbar";
import MySubject from "../../../components/SubjectTeacher/JyotiDabhade/Dashboard/MySubject";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
//import LecturesInWeek from '../../components/SubjectTeacher/Dashboard/LecturesInWeek';
import ExercisesList from '../../../components/SubjectTeacher/JyotiDabhade/Fideology/ExercisesList';

function Dashbord() {
  return (
    <>
        <RewadkarSubNavbar/>
        <MySubject />
        {/* <FideologyActivities /> */}
        <ExercisesList />
        {/* /<LecturesInWeek/> */}
    </>
  )
}

export default Dashbord;