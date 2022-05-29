import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/SecondYear/classTeacherNavbar';
import List from "../../../components/ClassTeacher/SecondYear/Students/addStudentList";

function addListPage(){
    return (
    <div>
        <ClassNavbar />
        <List />
    </div>
    );
}

export default addListPage;