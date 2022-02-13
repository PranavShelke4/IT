import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App"
import Dashbord from "../page/SubjectTeacherPages/Dashbord";

const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/subject-teacher-dashbord" element={<Dashbord />}></Route>
      </Routes>
    </>
  );
};

export default ConfigRoutes;