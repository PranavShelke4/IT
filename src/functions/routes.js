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
import EditAchievement from "../pages/ClassTeacherPages/EditAchievementPage";

import ClassFaculty from "../pages/ClassTeacherPages/FacultyDetails";
import AssignSTPage from "../pages/ClassTeacherPages/AssignSTPage";

import Student from "../pages/ClassTeacherPages/studentpage";
import AddList from "../pages/ClassTeacherPages/addListPage";
import EditStudentlist from "../pages/ClassTeacherPages/EditListPage";

import DetentionPage from "../pages/ClassTeacherPages/DetentionPage";
import AddDetentionList from "../pages/ClassTeacherPages/addDetentionPage";
import EditDetentionlist from "../pages/ClassTeacherPages/EditDetention";

import FeedbackPage from "../pages/ClassTeacherPages/FeedbackPage";
import AddFeedbackList from "../pages/ClassTeacherPages/AddFeedbackPage";
import ClassProfilePage from "../pages/ClassTeacherPages/ProfilePage";
import EditFeedbacklist from "../pages/ClassTeacherPages/EditFeedback";

//import AddStudentList from "../components/ClassTeacher/Students/addStudentlist";
//import EditStudentlist from "../components/ClassTeacher/Students/EditStudentlist";
//import AddDetentionList from "../components/ClassTeacher/Detention/addDetentionlist"
//import AddFeedbackList from "../components/ClassTeacher/FeedBack/addFeedbacklist";



// subject teacher Routes.....

import Dashbord from '../pages/SubjectTeacherPages/Dashbord';
import CreateExercise from "../pages/SubjectTeacherPages/FideologyForm";
import EditExercise from "../pages/SubjectTeacherPages/EditPedeology";

import StudentDetail from '../pages/SubjectTeacherPages/studentDetail';
import Course from '../pages/SubjectTeacherPages/coursePage';

import StudyPage  from "../pages/SubjectTeacherPages/studyPage";
import AddStudymaterial from "../pages/SubjectTeacherPages/StudyMaterialPage";
import EditStudymaterial from "../pages/SubjectTeacherPages/EditStudyMaterialPage";

import QuestionPaper from '../pages/SubjectTeacherPages/questionPaper';
import AnswerKey from '../pages/SubjectTeacherPages/answerKey';
import AssignmentPage from "../pages/SubjectTeacherPages/Assignmentpage";

import ProfilePage from "../pages/SubjectTeacherPages/ProfilePage";
import LeavePage from '../pages/SubjectTeacherPages/LeavePage';

//import EditExercise from "../pages/SubjectTeacherPages/EditPedeology";
//import ExercisesList from "../components/SubjectTeacher/Fideology/ExercisesList";
//import Studymaterial from "../components/SubjectTeacher/Course/StudyMaterial";
//import AddStudymaterial from "../components/SubjectTeacher/Course/AddStudymaterial";
//import EditStudymaterial from "../components/SubjectTeacher/Course/EditStudymaterial";



// Other

import SignUpPage from "../components/Signup/signup";



const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>

        <Route path="/subject-teacher/dashboard" element={<Dashbord />}></Route>
        <Route path="/subject-teacher/fideology-form" element={<CreateExercise />}></Route>
        <Route path="/edit/:id" element={<EditExercise/>}></Route>
        
        <Route path="/subject-teacher/student-details" element={<StudentDetail />}></Route>
        <Route path="/subject-teacher/course" element={<Course />}></Route>
        <Route path="/subject-teacher/study-material" element={<StudyPage />}></Route>
        <Route path="/subject-teacher/add-studymaterial" element={<AddStudymaterial />}></Route>
        <Route path="/studymaterial/edit/:id" element={<EditStudymaterial />}></Route>

        <Route path="/subject-teacher/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/subject-teacher/answer-key" element={<AnswerKey />}></Route>
        <Route path="/subject-teacher/assignments" element={<AssignmentPage />}></Route>
        
        <Route path="/subject-teacher/profile" element={<ProfilePage />}></Route>
        <Route path="/subject-teacher/leave" element={<LeavePage />}></Route>
       
        
      
        {/* class teacher Routes */}
        <Route path="/class-teacher/dashboard" element={<ClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/add-achievement" element={<AddAchievement />}></Route>
        <Route path="/CT/edit/:id" element={<EditAchievement/>}></Route>

        <Route path="/class-teacher/classfaculty" element={<ClassFaculty />}></Route>

        <Route path="/class-teacher/student-table" element={<Student />}></Route>
        <Route path="/class-teacher/add-student-list" element={<AddList />}></Route>
        <Route path="/studentlist/edit/:id" element={<EditStudentlist />}></Route>
        
        <Route path="/class-teacher/assign-subject-teacher" element={<AssignSTPage />}></Route>
        
        <Route path="/class-teacher/class-detentionlist" element={<DetentionPage />}></Route>
        <Route path="/class-teacher/add-detentionlist" element={<AddDetentionList />}></Route>
        <Route path="/detentionlist/edit/:id" element={<EditDetentionlist />}></Route>

        <Route path="/class-teacher/class-feedback" element={<FeedbackPage />}></Route>
        <Route path="/class-teacher/add-class-feedback-list" element={<AddFeedbackList />}></Route>
        <Route path="/feedbacklist/edit/:id" element={<EditFeedbacklist />}></Route>
        <Route path="/class-teacher/profile" element={<ClassProfilePage />}></Route>
        
        


        {/* HOD Routes */}
        <Route path="/HOD/Dashbord" element={<HODDashbord />}></Route>
        <Route path="/HOD/Faculty-Details" element={<FacultyDetails />}></Route>
        <Route path="/HOD/Faculty-CR" element={<FacultyCR />}></Route>
        <Route path="/HOD/assign-class-teacher" element={<AssignClassTeacher />}></Route>
        <Route path="/HOD/Facylty-Leave" element={<FacyltyLeave />}></Route>


        <Route path="/SignUp" element={<SignUpPage />}></Route>

      </Routes>
    </>
  );
};
export default ConfigRoutes;