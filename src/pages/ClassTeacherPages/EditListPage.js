import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import EditList from "../../components/ClassTeacher/Students/EditStudentlist";

function EditListPage(){
    return (
    <div>
        <ClassNavbar />
        <EditList />
    </div>
    );
}

export default EditListPage;