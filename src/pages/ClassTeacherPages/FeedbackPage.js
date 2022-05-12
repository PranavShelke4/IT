import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import Feedback from '../../components/ClassTeacher/FeedBack/FeedbackList';

function FeedbackPage(){
    return (
    <div>
        <ClassNavbar />
        <Feedback />
    </div>
    );
}

export default FeedbackPage;