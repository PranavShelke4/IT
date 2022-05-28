import React from 'react';
import StudentTable from '../../../components/SubjectTeacher/SheetalSutar/Student Details/studentTable';
import SutarSubNavbar from "../../../components/SubjectTeacher/SheetalSutar/SutarSubNavbar"

function studentDetail(){
    return (
    <div>
        <SutarSubNavbar />
        <StudentTable />
    </div>
    );
}

export default studentDetail;