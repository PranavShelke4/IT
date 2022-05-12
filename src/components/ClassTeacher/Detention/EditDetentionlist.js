import React,{useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import Detentionlist from "../../../api/Detentionlist";

import { useParams } from "react-router-dom";

function  EditDetentionlist() {

  const [date,SetDate] = useState("");
  const [descriptionName,SetDescriptionName] = useState("");
  const [linkName,SetLinkName] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    const HandelGetReq= async ()=>{
        console.log(params.id)
        const res = await Detentionlist.get(`/get-detentionlist/${params.id}`);
        console.log("res");
        console.log(res.data)
        SetDate( res.data.date);
        SetDescriptionName(res.data.description);
        SetLinkName(res.data.link);
    }
    HandelGetReq();
  },[SetDate,SetDescriptionName,SetLinkName,params.id]);


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
        "description":descriptionName,
        "link":linkName
    }

    console.log("req")
    console.log(params.id)
    console.log(formdata)
   const res = await Detentionlist.patch(`/update-detentionlist/${params.id}`,formdata);
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
          <label>Year</label>
          <input 
          type ="text"
          name ="activityName"
          value = {descriptionName}
          onChange={(e)=>{
            SetDescriptionName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Link</label>
          <input 
          type ="text"
          name="subName"
          value ={linkName}
          onChange={(e)=>{
            SetLinkName(e.target.value);
          }}
          />
        </div>
        
        <input className ="btn btn-primary" type="submit" value="Submit"/>
      </form>
    </div>
    </div>
  )
}

export default EditDetentionlist;     