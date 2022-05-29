import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import RewadkarSubNavbar from "../../../components/SubjectTeacher/DeepakRewadkar/RewadkarSubNavbar";
import StudyMaterial from '../../../components/SubjectTeacher/JyotiDabhade/Course/studyMaterial';

function studyPage(){
    return (
        <div>
            <RewadkarSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;