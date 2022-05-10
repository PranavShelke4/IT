import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import Studymaterial from "../../../api/Studymaterial";

import { useParams } from "react-router-dom";

function  EditStudymaterial() {

  const [date,SetDate] = useState("");
  const [activityName,SetActicityName] = useState("");
  const [subName,SetSubName] = useState("");
  const [groupNo, SetGroupNo] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Studymaterial.get(`/get-studymaterial/${params.id}`);
        console.log("res");
        console.log(res.data)
        SetDate( res.data.date);
        SetActicityName(res.data.activity);
        SetSubName(res.data.subject);
        SetGroupNo(res.data.group);
    }
    HandelGetReq();
  },[SetDate,SetActicityName,SetSubName,SetGroupNo,params.id]);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    // const formdata = new FormData();
    // formdata.append("date",date);
    // formdata.append("activity",activityName);
    // formdata.append("subject",subName);
    // formdata.append("group",groupNo);
    
    const formdata = {
        "date":date,
        "activity":activityName,
        "subject":subName,
        "group":groupNo
    }

    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Studymaterial.patch(`/update-studymaterial/${params.id}`,formdata);
   console.log(res.data.msg)

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

export default EditStudymaterial;     