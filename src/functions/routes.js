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

// Sheetal Sutar Routes.....

import SutarDashbord from '../pages/SubjectTeacherPages/SheetalSutar/Dashbord';
import SutarCreateExercise from "../pages/SubjectTeacherPages/SheetalSutar/FideologyForm";
import SutarEditExercise from "../pages/SubjectTeacherPages/SheetalSutar/EditPedeology";

import SutarStudentDetail from '../pages/SubjectTeacherPages/SheetalSutar/studentDetail';
import SutarCourse from '../pages/SubjectTeacherPages/SheetalSutar/coursePage';

import SutarStudyPage  from "../pages/SubjectTeacherPages/SheetalSutar/studyPage";
import SutarAddStudymaterial from "../pages/SubjectTeacherPages/SheetalSutar/StudyMaterialPage";
import SutarEditStudymaterial from "../pages/SubjectTeacherPages/SheetalSutar/EditStudyMaterialPage";

import SutarQuestionPaper from '../pages/SubjectTeacherPages/SheetalSutar/questionPaper';
import SutarAnswerKey from '../pages/SubjectTeacherPages/SheetalSutar/answerKey';
import SutarAssignmentPage from "../pages/SubjectTeacherPages/SheetalSutar/Assignmentpage";

import SutarProfilePage from "../pages/SubjectTeacherPages/SheetalSutar/ProfilePage";
import SutarLeavePage from '../pages/SubjectTeacherPages/SheetalSutar/LeavePage';

// Other

//import SignUpPage from "../components/Signup/signup";



const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<App />}></Route>

         {/* Sneha Raut Routes */}
        <Route path="/subject-teacher/sneha-raut/dashboard" element={<Dashbord />}></Route>
        <Route path="/subject-teacher/sneha-raut/fideology-form" element={<CreateExercise />}></Route>
        <Route path="/sneha-raut/edit/:id" element={<EditExercise/>}></Route>
        
        <Route path="/subject-teacher/sneha-raut/student-details" element={<StudentDetail />}></Route>
        <Route path="/subject-teacher/sneha-raut/course" element={<Course />}></Route>
        <Route path="/subject-teacher/sneha-raut/study-material" element={<StudyPage />}></Route>
        <Route path="/subject-teacher/sneha-raut/add-studymaterial" element={<AddStudymaterial />}></Route>
        <Route path="/studymaterial/edit/:id" element={<EditStudymaterial />}></Route>

        <Route path="/subject-teacher/sneha-raut/question-paper" element={<QuestionPaper />}></Route>
        <Route path="/subject-teacher/sneha-raut/answer-key" element={<AnswerKey />}></Route>
        <Route path="/subject-teacher/sneha-raut/assignments" element={<AssignmentPage />}></Route>
        
        <Route path="/subject-teacher/sneha-raut/profile" element={<ProfilePage />}></Route>
        <Route path="/subject-teacher/sneha-raut/leave" element={<LeavePage />}></Route>


         {/* Sheetal Sutar Routes */}
         <Route path="/subject-teacher/sheetal-sutar/dashboard" element={<SutarDashbord />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/fideology-form" element={<SutarCreateExercise />}></Route>
        <Route path="/edit/:id" element={<SutarEditExercise/>}></Route>
        
        <Route path="/subject-teacher/sheetal-sutar/student-details" element={<SutarStudentDetail />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/course" element={<SutarCourse />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/study-material" element={<SutarStudyPage />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/add-studymaterial" element={<SutarAddStudymaterial />}></Route>
        <Route path="/studymaterial/edit/:id" element={<SutarEditStudymaterial />}></Route>

        <Route path="/subject-teacher/sheetal-sutar/question-paper" element={<SutarQuestionPaper />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/answer-key" element={<SutarAnswerKey />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/assignments" element={<SutarAssignmentPage />}></Route>
        
        <Route path="/subject-teacher/sheetal-sutar/profile" element={<SutarProfilePage />}></Route>
        <Route path="/subject-teacher/sheetal-sutar/leave" element={<SutarLeavePage />}></Route>
       
        
      
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