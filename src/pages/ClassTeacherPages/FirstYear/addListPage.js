import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/FirstYear/classTeacherNavbar';
import List from "../../../components/ClassTeacher/FirstYear/Students/addStudentList";

function addListPage(){
    return (
    <div>
        <ClassNavbar />
        <List />
    </div>
    );
}

export default addListPage;