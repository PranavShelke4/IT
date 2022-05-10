import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Achievement from "../../../api/Achievement";


function  CreateAchievement() {

  const [studentName,SetStudentName] = useState("");
  const [deptName,SetDeptName] = useState("");
  const [instName,SetInstName] = useState("");
  const [eventName, SetEventName] = useState("");
  const [date,SetDate] = useState("");

//avadhut
  // const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const achievement = {
      sname:studentName,
      dept:deptName,
      institute:instName,
      ename:eventName,
      date:date
    }

    console.log(achievement);
   const res = await Achievement.post("/add-achievement",achievement);
   console.log(res.data.msg)
  //  if(res.data.msg =="success"){
  //   //  history.push("/subject-teacher-dashboard");
  //  }
  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
      <div>
          <label>Student Name</label>
          <input 
          type ="text"
          name ="studentName"
          value = {studentName}
          onChange={(e)=>{
            SetStudentName(e.target.value);
          }}
          />
        </div>
        
        <div>
          <label>Department</label>
          <input 
          type ="text"
          name ="deptName"
          value = {deptName}
          onChange={(e)=>{
            SetDeptName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Institute</label>
          <input 
          type ="text"
          name="instName"
          value ={instName}
          onChange={(e)=>{
            SetInstName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Event Name</label>
          <input 
          type = "text"
          name="eventName"
          value ={eventName}
          onChange={(e)=>{
            SetEventName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Date</label>
          <input 
          type = "date"
          name="date"
          value={date}
          onChange={(e) => {
            SetDate(e.target.value);
          }}
          />
        </div>
        <input className ="btn btn-primary" type="submit" value="Submit"/>
      </form>
    </div>
    </div>
  )
}

export default CreateAchievement;    