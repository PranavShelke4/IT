import React from 'react';
// import RautSubNavbar from '../../components/SubjectTeacher/subNavbar';
import FafatSubNavbar from "../../../../components/SubjectTeacher/PoonamFafat/FafatSubNavbar";
import StudyMaterial from '../../../../components/SubjectTeacher/PoonamFafat/Course/ETI/studyMaterial';

function studyPage(){
    return (
        <div>
            <FafatSubNavbar />
            <StudyMaterial />
        </div>
    );
}

export default studyPage;