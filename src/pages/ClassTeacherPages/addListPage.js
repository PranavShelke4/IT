import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import List from "../../components/ClassTeacher/Students/addStudentList";

function addListPage(){
    return (
    <div>
        <ClassNavbar />
        <List />
    </div>
    );
}

export default addListPage;