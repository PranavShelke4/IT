import React,{useState} from 'react'
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import Detentionlist from "../../../../api/ThirdYear/Detentionlist";
import "../../../SubjectTeacher/SnehaRaut/Fideology/createPedelogy.css"

function Cancel(){
  window.location.href="/class-teacher/TY/class-detentionlist";
}


function  AddDetentionList() {

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
    const detentionlist = {
      date:date,
      description:descriptionName,
      link:linkName
    }

    console.log(detentionlist);
   const res = await Detentionlist.post("/add-detentionlist",detentionlist);
   console.log(res.data.msg)
   window.location.href="/class-teacher/TY/class-detentionlist";
  //  if(res.data.msg =="success"){
  //   //  history.push("/subject-teacher-dashboard");
  //  }
  }

  return (
    <div className='main-sec'>
    <div className="upd_section">
      <form onSubmit ={handleSubmit(onSubmit)} >
        <div>
          <label>Date</label><br/>
          <input 
          className='input-box'
          type = "date"
          name="date"
          value={date}
          onChange={(e) => {
            SetDate(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Year</label><br/>
          <input 
          className='input-box'
          type ="text"
          name ="activityName"
          value = {descriptionName}
          onChange={(e)=>{
            SetDescriptionName(e.target.value);
          }}
          />
        </div>
        <div>
          <label>Link</label><br/>
          <input 
          className='input-box'
          type ="text"
          name="subName"
          value ={linkName}
          onChange={(e)=>{
            SetLinkName(e.target.value);
          }}
          />
        </div>
        
        <input className ="subButton" type="submit" value="Submit"/>
        <input className ="cancelButton" type="button" onClick={Cancel} value="Cancel"/>
      </form>
    </div>
    </div>
  )
}

export default AddDetentionList;     