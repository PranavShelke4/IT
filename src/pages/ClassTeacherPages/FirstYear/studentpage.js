import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/FirstYear/classTeacherNavbar';
import StudentTable from "../../../components/ClassTeacher/FirstYear/Students/StudentList";

function studentPage(){
    return (
    <div>
        <ClassNavbar />
        <StudentTable />
    </div>
    );
}

export default studentPage;