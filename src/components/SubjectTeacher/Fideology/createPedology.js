import React,{useState} from 'react'
import { useForm } from "react-hook-form";

import Exercise from "../../../api/Exercise";

function  CreatePedology() {

  const [date,SetDate] = useState("");
  const [activityName,SetActicityName] = useState("");
  const [subName,SetSubName] = useState("");
  const [groupNo, SetGroupNo] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const exercise = {
      date:date,
      activityName:activityName,
      subName:subName,
      groupNo:groupNo
    }

    console.log(exercise);
    await Exercise.post("/add-exercise",exercise);
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

export default CreatePedology      