import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/ThirdYear/classTeacherNavbar';
import List from "../../../components/ClassTeacher/ThirdYear/Students/addStudentList";

function addListPage(){
    return (
    <div>
        <ClassNavbar />
        <List />
    </div>
    );
}

export default addListPage;