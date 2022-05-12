import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import AddDetention from '../../components/ClassTeacher/Detention/addDetentionlist';

function addDetentionPage(){
    return (
    <div>
        <ClassNavbar />
        <AddDetention />
    </div>
    );
}

export default addDetentionPage;