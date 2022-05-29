import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/SecondYear/classTeacherNavbar';
import DetentionList from '../../../components/ClassTeacher/SecondYear/Detention/DetentionList';

function DetentionPage(){
    return (
    <div>
        <ClassNavbar />
        <DetentionList />
    </div>
    );
}

export default DetentionPage;