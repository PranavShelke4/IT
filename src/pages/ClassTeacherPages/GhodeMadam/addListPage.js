import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/GhodeMadam/classTeacherNavbar';
import List from "../../../components/ClassTeacher/GhodeMadam/Students/addStudentList";

function addListPage(){
    return (
    <div>
        <ClassNavbar />
        <List />
    </div>
    );
}

export default addListPage;