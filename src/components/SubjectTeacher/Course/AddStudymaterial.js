import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Studymaterial from "../../../api/Studymaterial";


function  AddStudymaterial() {

  const [date,SetDate] = useState("");
  const [activityName,SetActicityName] = useState("");
  const [subName,SetSubName] = useState("");
  const [groupNo, SetGroupNo] = useState("");


  // const history = useHistory();

  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const studymaterial = {
      date:date,
      activity:activityName,
      subject:subName,
      group:groupNo
    }

    console.log(studymaterial);
   const res = await Studymaterial.post("/add-studymaterial",studymaterial);
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
        <div>
          <label>Activity Name</label>
          <input 
          type ="text"
          name ="activityName"
          value = {activityName}
          onChange={(e)=>{
            SetActicityName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Sub Name</label>
          <input 
          type ="text"
          name="subName"
          value ={subName}
          onChange={(e)=>{
            SetSubName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Group NO</label>
          <input 
          type = "text"
          name="groupNo"
          value ={groupNo}
          onChange={(e)=>{
            SetGroupNo(e.target.value);
          }}
          />
        </div>
        <input className ="btn btn-primary" type="submit" value="Submit"/>
      </form>
    </div>
    </div>
  )
}

export default AddStudymaterial;     