import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/FafatMadam/classTeacherNavbar';
import StudentTable from "../../../components/ClassTeacher/FafatMadam/Students/StudentList";

function studentPage(){
    return (
    <div>
        <ClassNavbar />
        <StudentTable />
    </div>
    );
}

export default studentPage;