import React from 'react'
import ClassNavbar from '../../../components/ClassTeacher/FirstYear/classTeacherNavbar'
import MyClassDetails from "../../../components/ClassTeacher/FirstYear/Dashboard/myClassDetails";
import ImpNotes from '../../../components/ClassTeacher/FirstYear/Dashboard/ImpNotes';
import StudentAchievement from '../../../components/ClassTeacher/FirstYear/Dashboard/studentAchievement';

function Dashboard() {
  return (
    <>
        <ClassNavbar/>
        <MyClassDetails />
        <StudentAchievement />
        {/* <ImpNotes /> */}
    </>
  )
}

export default Dashboard;