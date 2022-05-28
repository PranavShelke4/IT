import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/GhodeMadam/classTeacherNavbar';
import StudentTable from "../../../components/ClassTeacher/GhodeMadam/Students/StudentList";

function studentPage(){
    return (
    <div>
        <ClassNavbar />
        <StudentTable />
    </div>
    );
}

export default studentPage;