import React from 'react';
import SutarSubNavbar from "../../../components/SubjectTeacher/SheetalSutar/SutarSubNavbar"
import LeaveForm from '../../../components/SubjectTeacher/SheetalSutar/Leaves/leaveForm';

function leavePage(){
    return (
        <div>
            <SutarSubNavbar />
            <LeaveForm />
        </div>
    );
}

export default leavePage;