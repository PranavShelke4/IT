import React from 'react';
import ClassNavbar from '../../components/ClassTeacher/classTeacherNavbar';
import EditDetentionList from '../../components/ClassTeacher/Detention/EditDetentionlist';

function EditDetention(){
    return (
    <div>
        <ClassNavbar />
        <EditDetentionList />
    </div>
    );
}

export default EditDetention;