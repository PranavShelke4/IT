import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/FirstYear/classTeacherNavbar';
import EditList from "../../../components/ClassTeacher/FirstYear/Students/EditStudentlist";

function EditListPage(){
    return (
    <div>
        <ClassNavbar />
        <EditList />
    </div>
    );
}

export default EditListPage;