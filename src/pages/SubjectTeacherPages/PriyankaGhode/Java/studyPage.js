import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import GhodeSubNavbar from "../../../../components/SubjectTeacher/PriyankaGhode/GhodeSubNavbar"
import StudyMaterial from '../../../../components/SubjectTeacher/PriyankaGhode/Course/java/studyMaterial';

function studyPage(){
    return (
        <div>
            <GhodeSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;