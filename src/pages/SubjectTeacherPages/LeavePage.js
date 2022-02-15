import React from 'react';
import SubNavbar from '../../components/SubjectTeacher/subNavbar';
import LeaveForm from '../../components/SubjectTeacher/Leaves/leaveForm';

function leavePage(){
    return (
        <div>
            <SubNavbar />
            <LeaveForm />
        </div>
    );
}

export default leavePage;