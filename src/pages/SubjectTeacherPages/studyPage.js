import React from 'react';
import SubNavbar from '../../components/SubjectTeacher/subNavbar';
import StudyMaterial from '../../components/SubjectTeacher/Course/studyMaterial';

function studyPage(){
    return (
        <div>
            <SubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;