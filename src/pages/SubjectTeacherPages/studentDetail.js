import React from 'react';
import StudentTable from '../../components/SubjectTeacher/Student Details/studentTable';
import SubNavbar from '../../components/SubjectTeacher/subNavbar';

function studentDetail(){
    return (
    <div>
        <SubNavbar />
        <StudentTable />
    </div>
    );
}

export default studentDetail;