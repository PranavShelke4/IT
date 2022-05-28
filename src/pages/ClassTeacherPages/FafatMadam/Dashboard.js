import React from 'react'
import ClassNavbar from '../../../components/ClassTeacher/FafatMadam/classTeacherNavbar'
import MyClassDetails from "../../../components/ClassTeacher/FafatMadam/Dashboard/myClassDetails";
import ImpNotes from '../../../components/ClassTeacher/FafatMadam/Dashboard/ImpNotes';
import StudentAchievement from '../../../components/ClassTeacher/FafatMadam/Dashboard/studentAchievement';

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