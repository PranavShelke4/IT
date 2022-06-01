import React from 'react';
import CSubject from '../../../components/SubjectTeacher/PriyankaGhode/Course/C/subject'
import JavaSubject from '../../../components/SubjectTeacher/PriyankaGhode/Course/java/subject'
import GhodeSubNavbar from "../../../components/SubjectTeacher/PriyankaGhode/GhodeSubNavbar"

function coursePage(){
    return (<div>
        <GhodeSubNavbar />
        <CSubject />
        <JavaSubject />
    </div>);

}

export default coursePage;