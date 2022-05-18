import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import CreateAchievement from '../../components/ClassTeacher/Dashboard/createAchievement'

function addAchievement(){
    return (
    <div>
        <ClassNavbar />
        <CreateAchievement />
    </div>
    );
}

export default addAchievement;