import React from 'react';
import ClassNavbar from '../../../components/ClassTeacher/FirstYear/classTeacherNavbar';
import DetentionList from '../../../components/ClassTeacher/FirstYear/Detention/DetentionList';

function DetentionPage(){
    return (
    <div>
        <ClassNavbar />
        <DetentionList />
    </div>
    );
}

export default DetentionPage;