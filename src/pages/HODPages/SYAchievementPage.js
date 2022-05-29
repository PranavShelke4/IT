import React from "react";
import HODNavbar from "../../components/HOD/HODNavbar";
import StudentAchievementsHOD from "../../components/HOD/Dashboard/SYAchievement";
import TopperList from "../../components/HOD/Dashboard/TopperList";

function Dashboard() {
  return (
    <>
      <HODNavbar />
      <h3 className='fidoh3'>Student Achievements</h3>
      <StudentAchievementsHOD />
      <TopperList />
    </>
  );
}

export default Dashboard;
