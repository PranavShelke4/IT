import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";


// HOD Routes

import HODDashbord from "../pages/HODPages/Dashboard"
import FacultyDetails from "../pages/HODPages/FacultyDetails";
import FacultyCR from "../pages/HODPages/FacultyCR";
import AssignClassTeacher from '../pages/HODPages/AssignClassTeacher';
import FacyltyLeave from '../pages/HODPages/Leaves'


// classTaecher Routes

import ClassTeacherDashboard from '../pages/ClassTeacherPages/Dashboard';
import AddAchievement from "../pages/ClassTeacherPages/addAchievement";
import Student from "../pages/ClassTeacherPages/studentpage";
import AddList from "../pages/ClassTeacherPages/addListPage";
import ClassFaculty from "../pages/ClassTeacherPages/FacultyDetails";
import DetentionPage from "../pages/ClassTeacherPages/DetentionPage";
import AddDetentionPage from "../pages/ClassTeacherPages/addDetentionPage";
import FeedbackPage from "../pages/ClassTeacherPages/FeedbackPage";
import AddFeedbackPage from "../pages/ClassTeacherPages/AddFeedbackPage";
import ClassProfilePage from "../pages/ClassTeacherPages/ProfilePage";
import AssignSTPage from "../pages/ClassTeacherPages/AssignSTPage";


// subject teacher Routes

import SignUp from "../components/SignUP/SignUp";
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
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/subject-teacher/fideology-form" element={<Fideology />}></Route>
        <Route path="/subject-teacher/dashboard" element={<Dashbord />}></Route>
        <Route path="/subject-teacher/student-details" element={<StudentDetail />}></Route>
        <Route path="/subject-teacher/course" element={<Course />}></Route>
        <Route path="/subject-teacher/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/subject-teacher/answer-key" element={<AnswerKey />}></Route>
        <Route path="/subject-teacher/assignments" element={<AssignmentPage />}></Route>
        <Route path="/subject-teacher/study-material" element={<StudyPage />}></Route>
        <Route path="/subject-teacher/profile" element={<ProfilePage />}></Route>
        <Route path="/subject-teacher/leave" element={<LeavePage />}></Route>
        <Route path="/edit/:id" element={<EditExercise/>}></Route>
        <Route path="/allExercises" element={<ExercisesList />}></Route>



        {/* class teacher Routes */}
        <Route path="/class-teacher/dashboard" element={<ClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/add-achievement" element={<AddAchievement />}></Route>
        <Route path="/class-teacher/student-table" element={<Student />}></Route>
        <Route path="/class-teacher/add-student-list" element={<AddList />}></Route>
        <Route path="/class-teacher/classfaculty" element={<ClassFaculty />}></Route>
        <Route path="/class-teacher/class-detentionlist" element={<DetentionPage />}></Route>
        <Route path="/class-teacher/add-detention-list" element={<AddDetentionPage />}></Route>
        <Route path="/class-teacher/class-feedback" element={<FeedbackPage />}></Route>
        <Route path="/class-teacher/add-class-feedback-list" element={<AddFeedbackPage />}></Route>
        <Route path="/class-teacher/profile" element={<ClassProfilePage />}></Route>
        <Route path="/class-teacher/assign-subject-teacher" element={<AssignSTPage />}></Route>


        {/* HOD Routes */}
        <Route path="/HOD/Dashbord" element={<HODDashbord />}></Route>
        <Route path="/HOD/Faculty-Details" element={<FacultyDetails />}></Route>
        <Route path="/HOD/Faculty-CR" element={<FacultyCR />}></Route>
        <Route path="/HOD/assign-class-teacher" element={<AssignClassTeacher />}></Route>
        <Route path="/HOD/Facylty-Leave" element={<FacyltyLeave />}></Route>

      </Routes>
    </>
  );
};
export default ConfigRoutes;