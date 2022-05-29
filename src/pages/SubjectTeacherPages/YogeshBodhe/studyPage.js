import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import BodheSubNavbar from '../../../components/SubjectTeacher/YogeshBodhe/BodheSubNavbar';
import StudyMaterial from '../../../components/SubjectTeacher/YogeshBodhe/Course/studyMaterial';

function studyPage(){
    return (
        <div>
            <BodheSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;