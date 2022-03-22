import React from 'react'
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar'
import MyClassDetails from "../../components/ClassTeacher/Dashboard/myClassDetails";
// import FideologyActivities from "../../components/SubjectTeacher/Dashboard/FideologyActivities";
import ImpNotes from '../../components/ClassTeacher/Dashboard/ImpNotes';
import StudentAchievement from '../../components/ClassTeacher/Dashboard/StudentAchievement';

function Dashbord() {
  return (
    <>
        <ClassNavbar/>
        <MyClassDetails />
        <StudentAchievement />
        <ImpNotes />
    </>
  )
}

export default Dashbord;