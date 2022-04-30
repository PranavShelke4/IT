import React, { Component } from 'react';
//import axios from "axios";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import '../Students/addList.css';

class addFeedback extends Component {

    // constructor(props){
    //     super();
    //     this.state = {
            
    //         date: new Date(),
    //         activity: ""
    //     }
    

    //     this.onChangeDate = this.onChangeDate.bind(this);
    //     this.onChangeLink = this.onChangeLink.bind(this);
        
    // }

   
    // onChangeDate(date) {
    //     this.setState({ date: date})
    // }
    // onChangeLink(e) {
    //     this.setState({ link: e.target.value})
    // }
    // onSubmit(e) {
    //     e.preventDefault();
    //     const achievement = {
    //         // username: this.state.username,

    //         date: this.state.date,
    //         link: this.state.link
    //     }

    //     console.log(achievement);

    //     axios.post("http://localhost:5000/achievements/add-achievement", achievement)
    //         .then(res => console.log(res.data));

    //     window.location = "/student-table";
    // }
    // Cancel(e){
    //     window.location = "/student-table";
    // }
    
    render() { 
        return ( 
            <div className='main-sec'>
            <div className="upd_section">
            
                <form>

                        <label className='label l1'>Academic Year : </label><br/>
                       
                            <DatePicker
                                className='update'
                                //selected={this.state.date}
                                ///onChange={this.onChangeDate}
                                placeholderText='Academic Year'
                            />
                            <br/>

                            <label className='label l2'>faculty Name : </label><br/>
                        <input
                            type="text" required
                            className='update'
                            //value={this.state.activity}
                            //onChange={this.onChangeLink}
                            placeholder="Faculty Name"
                        /><br/>
      
                    
                    
                        <label className='label l2'>Link : </label><br/>
                        <input
                            type="text" required
                            className='update'
                            //value={this.state.activity}
                            //onChange={this.onChangeLink}
                            placeholder="Link"
                        /><br/>
                
            
                        <button type="submit" value="Submit" className="submit">Submit</button>        
                        <button type="reset" value="Cancel" className="cancel">Cancel</button>
                 
                </form>
            </div>
            </div>
         );
    }
}
 
export default addFeedback;
