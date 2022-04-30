import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import DetentionList from '../../components/ClassTeacher/Detention/DetentionList';

function DetentionPage(){
    return (
    <div>
        <ClassNavbar />
        <DetentionList />
    </div>
    );
}

export default DetentionPage;