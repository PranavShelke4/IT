import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Feedbacklist from "../../../api/Feedbacklist";


function  AddFeedbackList() {

  const [date,SetDate] = useState("");
  const [descriptionName,SetDescriptionName] = useState("");
  const [linkName,SetLinkName] = useState("");



  // const history = useHistory();

  //rajesh is here
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async() =>{
    const feedbacklist = {
      date:date,
      description:descriptionName,
      link:linkName
    }

    console.log(feedbacklist);
   const res = await Feedbacklist.post("/add-feedbacklist",feedbacklist);
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
          <label>Name</label>
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

export default AddFeedbackList;     