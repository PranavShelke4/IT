import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import './createAchievement.css'

class createAchievement extends Component {

    constructor(props){
        super();
        this.state = {
            // username: "",
            date: new Date(),
            activity: "",
            subject: "",
            group: 0
           
        }
        // this.onChangeUsername = this.onChangeUsername.bind(this);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/achievements/')
    //         .then(response => {
    //             if(response.data.length > 0) {
    //                 this.setState({ 
    //                     users: response.data.map(user => user.username),
    //                     username: response.data[0].username
    //                 });
    //             }
    //         })
    // }

    // onChangeUsername(e) {
    //     this.setState({ username: e.target.value})
    // }
    onChangeDate(date) {
        this.setState({ date: date})
    }
    onChangeActivity(e) {
        this.setState({ activity: e.target.value})
    }
    onChangeSubject(e) {
        this.setState({ subject: e.target.value})
    }
    onChangeGroup(e) {
        this.setState({ group: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const achievement = {
            // username: this.state.username,

            date: this.state.date,
            activity: this.state.activity,
            subject: this.state.subject,
            group: this.state.group
        }

        console.log(achievement);

        axios.post("http://localhost:5000/achievements/add-achievement", achievement)
            .then(res => console.log(res.data));

        window.location = "/class-teacher-dashboard";
    }
    Cancel(e){
        window.location = "/class-teacher-dashboard";
    }
    
    render() { 
        return ( 
            <div className='main-sec'>
            <div className="upd_section">
            
                <form onSubmit={this.onSubmit}>

                        <label className='label l1'>Date : </label><br/>
                       
                            <DatePicker
                                className='update'
                                // showYearPicker
                                // dateFormat={"yyyy"}
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                
                            />
                            <br/>
      
                    
                    
                        <label className='label l2'>Activity Name : </label><br/>
                        <input
                            type="text" required
                            className='update'
                            value={this.state.activity}
                            onChange={this.onChangeActivity}
                            placeholder="Activity Name"
                        /><br/>
                
                    
                        <label className='label l3'>Subject: </label><br/>
                        <input
                            type="text"
                            className='update'
                            value={this.state.subject}
                            onChange={this.onChangeSubject}
                            placeholder="Subject"
                        /><br/>
                  
                 
                        <label className='label l4'>Group No : </label><br/>
                        <input
                            type="number"
                            className='update'
                            value={this.state.group}
                            onChange={this.onChangeGroup}
                            placeholder="Group No"
                        /><br/>
    
                        <button type="submit" value="Submit" className="submit">Submit</button>        
                        <button type="reset" value="Cancel" className="cancel" onClick={this.Cancel}>Cancel</button>
                 
                </form>
            </div>
            </div>
         );
    }
}
 
export default createAchievement;
