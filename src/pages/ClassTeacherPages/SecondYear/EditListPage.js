import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/SecondYear/classTeacherNavbar';
import EditList from "../../../components/ClassTeacher/SecondYear/Students/EditStudentlist";

function EditListPage(){
    return (
    <div>
        <ClassNavbar />
        <EditList />
    </div>
    );
}

export default EditListPage;