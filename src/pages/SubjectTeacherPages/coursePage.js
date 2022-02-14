import React from 'react';
import Subject from '../../components/SubjectTeacher/Course/subject'
import SubNavbar from '../../components/SubjectTeacher/subNavbar';

function coursePage(){
    return (<div>
        <SubNavbar />
        <Subject />
        <Subject />
        <Subject />
    </div>);

}

export default coursePage;