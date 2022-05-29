import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/ThirdYear/classTeacherNavbar';
import StudentTable from "../../../components/ClassTeacher/ThirdYear/Students/StudentList";

function studentPage(){
    return (
    <div>
        <ClassNavbar />
        <StudentTable />
    </div>
    );
}

export default studentPage;