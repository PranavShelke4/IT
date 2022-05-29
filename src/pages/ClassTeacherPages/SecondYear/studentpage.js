import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/SecondYear/classTeacherNavbar';
import StudentTable from "../../../components/ClassTeacher/SecondYear/Students/StudentList";

function studentPage(){
    return (
    <div>
        <ClassNavbar />
        <StudentTable />
    </div>
    );
}

export default studentPage;