import React from 'react'
import ClassNavbar from '../../../components/ClassTeacher/GhodeMadam/classTeacherNavbar'
import MyClassDetails from "../../../components/ClassTeacher/GhodeMadam/Dashboard/myClassDetails";
import ImpNotes from '../../../components/ClassTeacher/GhodeMadam/Dashboard/ImpNotes';
import StudentAchievement from '../../../components/ClassTeacher/GhodeMadam/Dashboard/studentAchievement';

function Dashboard() {
  return (
    <>
        <ClassNavbar/>
        <MyClassDetails />
        <StudentAchievement />
        <ImpNotes />
    </>
  )
}

export default Dashboard;