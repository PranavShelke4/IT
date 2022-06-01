import React from 'react'
import ClassNavbar from '../../../components/ClassTeacher/ThirdYear/classTeacherNavbar'
import MyClassDetails from "../../../components/ClassTeacher/ThirdYear/Dashboard/myClassDetails";
import ImpNotes from '../../../components/ClassTeacher/ThirdYear/Dashboard/ImpNotes';
import StudentAchievement from '../../../components/ClassTeacher/ThirdYear/Dashboard/studentAchievement';

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