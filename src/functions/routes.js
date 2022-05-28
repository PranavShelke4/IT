import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";


// HOD Routes

import HODDashbord from "../pages/HODPages/Dashboard"
import FacultyDetails from "../pages/HODPages/FacultyDetails";
import FacultyCR from "../pages/HODPages/FacultyCR";
import AssignClassTeacher from '../pages/HODPages/AssignClassTeacher';
import FacyltyLeave from '../pages/HODPages/Leaves'


// classTaecher Routes Ghode Madam

import ClassTeacherDashboard from '../pages/ClassTeacherPages/GhodeMadam/Dashboard';
import AddAchievement from "../pages/ClassTeacherPages/GhodeMadam/addAchievement";
import EditAchievement from "../pages/ClassTeacherPages/GhodeMadam/EditAchievementPage";

import ClassFaculty from "../pages/ClassTeacherPages/GhodeMadam/FacultyDetails";

import AssignST5thPage from "../pages/ClassTeacherPages/GhodeMadam/AssignST5thPage";
import AssignST6thPage from "../pages/ClassTeacherPages/GhodeMadam/AssignST6thPage";

import Student from "../pages/ClassTeacherPages/GhodeMadam/studentpage";
import AddList from "../pages/ClassTeacherPages/GhodeMadam/addListPage";
import EditStudentlist from "../pages/ClassTeacherPages/GhodeMadam/EditListPage";

import DetentionPage from "../pages/ClassTeacherPages/GhodeMadam/DetentionPage";
import AddDetentionList from "../pages/ClassTeacherPages/GhodeMadam/addDetentionPage";
import EditDetentionlist from "../pages/ClassTeacherPages/GhodeMadam/EditDetention";

import FeedbackPage from "../pages/ClassTeacherPages/GhodeMadam/FeedbackPage";
import AddFeedbackList from "../pages/ClassTeacherPages/GhodeMadam/AddFeedbackPage";
import EditFeedbacklist from "../pages/ClassTeacherPages/GhodeMadam/EditFeedback";

import ClassProfilePage from "../pages/ClassTeacherPages/GhodeMadam/ProfilePage";

//class Teacher routes Fafat Madam

import FafatClassTeacherDashboard from '../pages/ClassTeacherPages/FafatMadam/Dashboard';
import FafatAddAchievement from "../pages/ClassTeacherPages/FafatMadam/addAchievement";
import FafatEditAchievement from "../pages/ClassTeacherPages/FafatMadam/EditAchievementPage";

import FafatClassFaculty from "../pages/ClassTeacherPages/FafatMadam/FacultyDetails";

import FafatAssignST5thPage from "../pages/ClassTeacherPages/FafatMadam/AssignST5thPage";
import FafatAssignST6thPage from "../pages/ClassTeacherPages/FafatMadam/AssignST6thPage";

import FafatStudent from "../pages/ClassTeacherPages/FafatMadam/studentpage";
import FafatAddList from "../pages/ClassTeacherPages/FafatMadam/addListPage";
import FafatEditStudentlist from "../pages/ClassTeacherPages/FafatMadam/EditListPage";

import FafatDetentionPage from "../pages/ClassTeacherPages/FafatMadam/DetentionPage";
import FafatAddDetentionList from "../pages/ClassTeacherPages/FafatMadam/addDetentionPage";
import FafatEditDetentionlist from "../pages/ClassTeacherPages/FafatMadam/EditDetention";

import FafatFeedbackPage from "../pages/ClassTeacherPages/FafatMadam/FeedbackPage";
import FafatAddFeedbackList from "../pages/ClassTeacherPages/FafatMadam/AddFeedbackPage";
import FafatEditFeedbacklist from "../pages/ClassTeacherPages/FafatMadam/EditFeedback";

import FafatClassProfilePage from "../pages/ClassTeacherPages/FafatMadam/ProfilePage";



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

// Poonam Fafat Routes.....

import FafatDashbord from '../pages/SubjectTeacherPages/PoonamFafat/Dashbord';
import FafatCreateExercise from "../pages/SubjectTeacherPages/PoonamFafat/FideologyForm";
import FafatEditExercise from "../pages/SubjectTeacherPages/PoonamFafat/EditPedeology";

import FafatStudentDetail from '../pages/SubjectTeacherPages/PoonamFafat/studentDetail';
import FafatCourse from '../pages/SubjectTeacherPages/PoonamFafat/coursePage';

import FafatStudyPage  from "../pages/SubjectTeacherPages/PoonamFafat/studyPage";
import FafatAddStudymaterial from "../pages/SubjectTeacherPages/PoonamFafat/StudyMaterialPage";
import FafatEditStudymaterial from "../pages/SubjectTeacherPages/PoonamFafat/EditStudyMaterialPage";

import FafatQuestionPaper from '../pages/SubjectTeacherPages/PoonamFafat/questionPaper';
import FafatAnswerKey from '../pages/SubjectTeacherPages/PoonamFafat/answerKey';
import FafatAssignmentPage from "../pages/SubjectTeacherPages/PoonamFafat/Assignmentpage";

import FafatProfilePage from "../pages/SubjectTeacherPages/PoonamFafat/ProfilePage";
import FafatLeavePage from '../pages/SubjectTeacherPages/PoonamFafat/LeavePage';

// Jyoti Dabhade Routes.....

import DabhadeDashbord from '../pages/SubjectTeacherPages/JyotiDabhade/Dashbord';
import DabhadeCreateExercise from "../pages/SubjectTeacherPages/JyotiDabhade/FideologyForm";
import DabhadeEditExercise from "../pages/SubjectTeacherPages/JyotiDabhade/EditPedeology";

import DabhadeStudentDetail from '../pages/SubjectTeacherPages/JyotiDabhade/studentDetail';
import DabhadeCourse from '../pages/SubjectTeacherPages/JyotiDabhade/coursePage';

import DabhadeStudyPage  from "../pages/SubjectTeacherPages/JyotiDabhade/studyPage";
import DabhadeAddStudymaterial from "../pages/SubjectTeacherPages/JyotiDabhade/StudyMaterialPage";
import DabhadeEditStudymaterial from "../pages/SubjectTeacherPages/JyotiDabhade/EditStudyMaterialPage";

import DabhadeQuestionPaper from '../pages/SubjectTeacherPages/JyotiDabhade/questionPaper';
import DabhadeAnswerKey from '../pages/SubjectTeacherPages/JyotiDabhade/answerKey';
import DabhadeAssignmentPage from "../pages/SubjectTeacherPages/JyotiDabhade/Assignmentpage";

import DabhadeProfilePage from "../pages/SubjectTeacherPages/JyotiDabhade/ProfilePage";
import DabhadeLeavePage from '../pages/SubjectTeacherPages/JyotiDabhade/LeavePage';

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


         {/* Poonam Fafat Routes */}
         <Route path="/subject-teacher/poonam-fafat/dashboard" element={<FafatDashbord />}></Route>
        <Route path="/subject-teacher/poonam-fafat/fideology-form" element={<FafatCreateExercise />}></Route>
        <Route path="/edit/:id" element={<FafatEditExercise/>}></Route>
        
        <Route path="/subject-teacher/poonam-fafat/student-details" element={<FafatStudentDetail />}></Route>
        <Route path="/subject-teacher/poonam-fafat/course" element={<FafatCourse />}></Route>
        <Route path="/subject-teacher/poonam-fafat/study-material" element={<FafatStudyPage />}></Route>
        <Route path="/subject-teacher/poonam-fafat/add-studymaterial" element={<FafatAddStudymaterial />}></Route>
        <Route path="/studymaterial/edit/:id" element={<FafatEditStudymaterial />}></Route>

        <Route path="/subject-teacher/poonam-fafat/question-paper" element={<FafatQuestionPaper />}></Route>
        <Route path="/subject-teacher/poonam-fafat/answer-key" element={<FafatAnswerKey />}></Route>
        <Route path="/subject-teacher/poonam-fafat/assignments" element={<FafatAssignmentPage />}></Route>
        
        <Route path="/subject-teacher/poonam-fafat/profile" element={<FafatProfilePage />}></Route>
        <Route path="/subject-teacher/poonam-fafat/leave" element={<FafatLeavePage />}></Route>


         {/* Jotyi Dabhade Routes */}
         <Route path="/subject-teacher/jyoti-dabhade/dashboard" element={<DabhadeDashbord />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/fideology-form" element={<DabhadeCreateExercise />}></Route>
        <Route path="/edit/:id" element={<DabhadeEditExercise/>}></Route>
        
        <Route path="/subject-teacher/jyoti-dabhade/student-details" element={<DabhadeStudentDetail />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/course" element={<DabhadeCourse />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/study-material" element={<DabhadeStudyPage />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/add-studymaterial" element={<DabhadeAddStudymaterial />}></Route>
        <Route path="/studymaterial/edit/:id" element={<DabhadeEditStudymaterial />}></Route>

        <Route path="/subject-teacher/jyoti-dabhade/question-paper" element={<DabhadeQuestionPaper />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/answer-key" element={<DabhadeAnswerKey />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/assignments" element={<DabhadeAssignmentPage />}></Route>
        
        <Route path="/subject-teacher/jyoti-dabhade/profile" element={<DabhadeProfilePage />}></Route>
        <Route path="/subject-teacher/jyoti-dabhade/leave" element={<DabhadeLeavePage />}></Route>
       
        
      
        {/* class teacher Routes Ghode Madam  */}
        <Route path="/class-teacher/dashboard" element={<ClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/add-achievement" element={<AddAchievement />}></Route>
        <Route path="/CT/edit/:id" element={<EditAchievement/>}></Route>

        <Route path="/class-teacher/classfaculty" element={<ClassFaculty />}></Route>

        <Route path="/class-teacher/student-table" element={<Student />}></Route>
        <Route path="/class-teacher/add-student-list" element={<AddList />}></Route>
        <Route path="/studentlist/edit/:id" element={<EditStudentlist />}></Route>
        
        <Route path="/class-teacher/assign-5thSem" element={<AssignST5thPage />}></Route>
        <Route path="/class-teacher/assign-6thSem" element={<AssignST6thPage />}></Route>
        
        <Route path="/class-teacher/class-detentionlist" element={<DetentionPage />}></Route>
        <Route path="/class-teacher/add-detentionlist" element={<AddDetentionList />}></Route>
        <Route path="/detentionlist/edit/:id" element={<EditDetentionlist />}></Route>

        <Route path="/class-teacher/class-feedback" element={<FeedbackPage />}></Route>
        <Route path="/class-teacher/add-feedbacklist" element={<AddFeedbackList />}></Route>
        <Route path="/feedbacklist/edit/:id" element={<EditFeedbacklist />}></Route>
        <Route path="/class-teacher/profile" element={<ClassProfilePage />}></Route>
        
        
        {/* class teacher Routes Fafat Madam  */}
        <Route path="/class-teacher/Fafat/dashboard" element={<FafatClassTeacherDashboard />}></Route>
        <Route path="/class-teacher/Fafat/add-achievement" element={<FafatAddAchievement />}></Route>
        <Route path="/CT/Fafat/edit/:id" element={<FafatEditAchievement/>}></Route>

        <Route path="/class-teacher/Fafat/classfaculty" element={<FafatClassFaculty />}></Route>

        <Route path="/class-teacher/Fafat/student-table" element={<FafatStudent />}></Route>
        <Route path="/class-teacher/Fafat/add-student-list" element={<FafatAddList />}></Route>
        <Route path="/studentlist/Fafat/edit/:id" element={<FafatEditStudentlist />}></Route>
        
        <Route path="/class-teacher/Fafat/assign-5thSem" element={<FafatAssignST5thPage />}></Route>
        <Route path="/class-teacher/Fafat/assign-6thSem" element={<FafatAssignST6thPage />}></Route>
        
        <Route path="/class-teacher/Fafat/class-detentionlist" element={<FafatDetentionPage />}></Route>
        <Route path="/class-teacher/Fafat/add-detentionlist" element={<FafatAddDetentionList />}></Route>
        <Route path="/detentionlist/Fafat/edit/:id" element={<FafatEditDetentionlist />}></Route>

        <Route path="/class-teacher/Fafat/class-feedback" element={<FafatFeedbackPage />}></Route>
        <Route path="/class-teacher/Fafat/add-feedbacklist" element={<FafatAddFeedbackList />}></Route>
        <Route path="/feedbacklist/Fafat/edit/:id" element={<FafatEditFeedbacklist />}></Route>
        <Route path="/class-teacher/Fafat/profile" element={<FafatClassProfilePage />}></Route>
        


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