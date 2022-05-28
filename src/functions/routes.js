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



// Sneha Raut Routes.....

import Dashbord from '../pages/SubjectTeacherPages/SnehaRaut/Dashbord';
import CreateExercise from "../pages/SubjectTeacherPages/SnehaRaut/FideologyForm";
import EditExercise from "../pages/SubjectTeacherPages/SnehaRaut/EditPedeology";

import StudentDetail from '../pages/SubjectTeacherPages/SnehaRaut/studentDetail';
import Course from '../pages/SubjectTeacherPages/SnehaRaut/coursePage';

import StudyPage  from "../pages/SubjectTeacherPages/SnehaRaut/studyPage";
import AddStudymaterial from "../pages/SubjectTeacherPages/SnehaRaut/StudyMaterialPage";
import EditStudymaterial from "../pages/SubjectTeacherPages/SnehaRaut/EditStudyMaterialPage";

import QuestionPaper from '../pages/SubjectTeacherPages/SnehaRaut/questionPaper';
import AnswerKey from '../pages/SubjectTeacherPages/SnehaRaut/answerKey';
import AssignmentPage from "../pages/SubjectTeacherPages/SnehaRaut/Assignmentpage";

import ProfilePage from "../pages/SubjectTeacherPages/SnehaRaut/ProfilePage";
import LeavePage from '../pages/SubjectTeacherPages/SnehaRaut/LeavePage';

//import EditExercise from "../pages/SubjectTeacherPages/EditPedeology";
//import ExercisesList from "../components/SubjectTeacher/Fideology/ExercisesList";
//import Studymaterial from "../components/SubjectTeacher/Course/StudyMaterial";
//import AddStudymaterial from "../components/SubjectTeacher/Course/AddStudymaterial";
//import EditStudymaterial from "../components/SubjectTeacher/Course/EditStudymaterial";



// Other

//import SignUpPage from "../components/Signup/signup";



const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>

        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/dashboard" element={<Dashbord />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/fideology-form" element={<CreateExercise />}></Route>
        <Route path="/edit/:id" element={<EditExercise/>}></Route>
        
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/student-details" element={<StudentDetail />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/course" element={<Course />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/study-material" element={<StudyPage />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/add-studymaterial" element={<AddStudymaterial />}></Route>
        <Route path="/studymaterial/edit/:id" element={<EditStudymaterial />}></Route>

        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/answer-key" element={<AnswerKey />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/assignments" element={<AssignmentPage />}></Route>
        
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/profile" element={<ProfilePage />}></Route>
        <Route path="/subject-teacher/sneha-raut-8wey8wdisd9823e12ncxzncz/leave" element={<LeavePage />}></Route>
       
        
      
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


        {/* <Route path="/SignUp" element={<SignUpPage />}></Route> */}

      </Routes>
    </>
  );
};
export default ConfigRoutes;