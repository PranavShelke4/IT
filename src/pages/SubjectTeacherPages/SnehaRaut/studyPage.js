import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import RautSubNavbar from '../../../components/SubjectTeacher/SnehaRaut/RautSubNavbar';
import StudyMaterial from '../../../components/SubjectTeacher/SnehaRaut/Course/studyMaterial';

function studyPage(){
    return (
        <div>
            <RautSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;