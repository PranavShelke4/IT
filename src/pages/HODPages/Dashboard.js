import React from "react";
import HODNavbar from "../../components/HOD/HODNavbar";
import StudentAchievementsHOD from "../../components/HOD/Dashboard/StudentAchievementsHOD";
import TopperList from "../../components/HOD/Dashboard/TopperList";

function Dashboard() {
  return (
    <>
      <HODNavbar />
      <StudentAchievementsHOD />
      <TopperList />
    </>
  );
}

export default Dashboard;
