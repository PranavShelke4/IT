import React from 'react';
import Subject from '../../../components/SubjectTeacher/SheetalSutar/Course/subject'
import SutarSubNavbar from "../../../components/SubjectTeacher/SheetalSutar/SutarSubNavbar"

function coursePage(){
    return (<div>
        <SutarSubNavbar />
        <Subject />
        <Subject />
        <Subject />
    </div>);

}

export default coursePage;