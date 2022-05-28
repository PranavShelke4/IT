import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import SutarSubNavbar from "../../../components/SubjectTeacher/SheetalSutar/SutarSubNavbar"
import StudyMaterial from '../../../components/SubjectTeacher/SheetalSutar/Course/studyMaterial';

function studyPage(){
    return (
        <div>
            <SutarSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;