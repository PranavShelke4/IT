import React from 'react'
import ClassNavbar from '../../../components/ClassTeacher/SecondYear/classTeacherNavbar'
import MyClassDetails from "../../../components/ClassTeacher/SecondYear/Dashboard/myClassDetails";
import ImpNotes from '../../../components/ClassTeacher/SecondYear/Dashboard/ImpNotes';
import StudentAchievement from '../../../components/ClassTeacher/SecondYear/Dashboard/studentAchievement';

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