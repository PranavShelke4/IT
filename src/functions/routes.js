import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Dashbord from '../pages/SubjectTeacherPages/Dashbord';
import Fideology from '../pages/SubjectTeacherPages/FideologyForm';


const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/fideology-form" element={<Fideology />}></Route>
        <Route path="/subject-teacher-dashbord" element={<Dashbord />}></Route>
       
      </Routes>
    </>
  );
};

export default ConfigRoutes;