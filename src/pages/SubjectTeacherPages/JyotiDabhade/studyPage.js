import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import DabhdeSubNavbar from "../../../components/SubjectTeacher/JyotiDabhade/DabhdeSubNavbar";
import StudyMaterial from '../../../components/SubjectTeacher/JyotiDabhade/Course/studyMaterial';

function studyPage(){
    return (
        <div>
            <DabhdeSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;