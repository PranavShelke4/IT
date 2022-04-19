import React from 'react'
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar'
import MyClassDetails from "../../components/ClassTeacher/Dashboard/myClassDetails";
import ImpNotes from '../../components/ClassTeacher/Dashboard/ImpNotes';
import StudentAchievement from '../../components/ClassTeacher/Dashboard/studentAchievement';

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