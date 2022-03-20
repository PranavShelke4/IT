import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Signup from "../components/SignUp/signUp";
import Dashbord from '../pages/SubjectTeacherPages/Dashbord';
import Fideology from '../pages/SubjectTeacherPages/FideologyForm';
import StudentDetail from '../pages/SubjectTeacherPages/studentDetail';
import Course from '../pages/SubjectTeacherPages/coursePage';
import QuestionPaper from '../pages/SubjectTeacherPages/questionPaper';
import AnswerKey from '../pages/SubjectTeacherPages/answerKey';
import AssignmentPage from "../pages/SubjectTeacherPages/Assignmentpage";
import StudyPage  from "../pages/SubjectTeacherPages/studyPage";
import ProfilePage from "../pages/SubjectTeacherPages/ProfilePage";
import LeavePage from '../pages/SubjectTeacherPages/LeavePage';

import EditExercise from "../components/SubjectTeacher/Fideology/EditExercise";
import ExercisesList from "../components/SubjectTeacher/Fideology/ExercisesList";

const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/fideology-form" element={<Fideology />}></Route>
        <Route path="/subject-teacher-dashboard" element={<Dashbord />}></Route>
        <Route path="/student-details" element={<StudentDetail />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/answer-key" element={<AnswerKey />}></Route>
        <Route path="/assignments" element={<AssignmentPage />}></Route>
        <Route path="/study-material" element={<StudyPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/leave" element={<LeavePage />}></Route>
       

        <Route path="/edit/:id" element={<EditExercise/>}></Route>
        <Route path="/allExercises" element={<ExercisesList />}></Route>


      </Routes>
    </>
  );
};

export default ConfigRoutes;