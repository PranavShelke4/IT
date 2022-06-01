import React from 'react';
// import Subject from '../../../components/SubjectTeacher/PoonamFafat/Course/SEN/Subject';
import Subject from "../../../components/SubjectTeacher/PoonamFafat/Course/SEN/subject";
import FafatSubNavbar from "../../../components/SubjectTeacher/PoonamFafat/FafatSubNavbar";
import Subjet2 from "../../../components/SubjectTeacher/PoonamFafat/Course/ETI/subject";

function coursePage(){
    return (<div>
        <FafatSubNavbar />
        <Subject />
        <Subjet2 />
    </div>);

}

export default coursePage;