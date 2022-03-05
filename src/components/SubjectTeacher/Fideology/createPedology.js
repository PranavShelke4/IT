// import React from 'react';
// import './createPedology.css';

// function createPedology(){
//     return ( 
//     <div className='upd_section'>
//         <label className="label l1">Date</label><br />
//         <input className="update" type="date" name="date" placeholder="Date" /><br />
//         <label className="label l2">Activity Name</label><br />
//         <input className="update" type="text" name="activity" placeholder="Activity Name" /><br />
//         <label className="label l3">Subject</label><br />
//         <input className="update" type="text" name="subject" placeholder="Subject Name" /><br />
//         <label className="label l4">Group No.</label><br />
//         <input className="update" type="number" name="number" placeholder="Group No." />

//         <a href='/'><button className="submit">Submit</button></a>
//         <a href='/'><button className="cancel">Cancel</button></a>
//     </div>
//     );
// }

// export default createPedology;

import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Pedology from '../../../../backend/models/pedology.model';

class createPedology extends Component {

    constructor(props){
        super();
        this.state = {
            date: new Date(),
            activityName: "",
            subject: "",
            groupNo: 0,
        }
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeActivityName = this.onChangeActivityName.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeGroupNo = this.onChangeGroupNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeDate(date) {
        this.setState({ date: date})
    }
    onChangeActivityName(e) {
        this.setState({ activityName: e.target.value})
    }
    onChangeSubject(e) {
        this.setState({ subject: e.target.value})
    }
    onChangeGroupNo(e) {
        this.setState({ groupNo: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const pedology = {
           
            date: this.state.date,
            activityName: this.state.activityName,
            subject: this.state.subject,
            groupNo: this.state.groupNo
        }

        console.log(pedology);

        axios.post('http://localhost:5000/pedologies/add', pedology)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Create New pedology Log</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>activity Name: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.activityName}
                            onChange={this.onChangeActivityName}
                        />
                    </div>
                    <div className="form-group">
                        <label>subject: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.subject}
                            onChange={this.onChangeSubject}
                        />
                    </div>
                    <div className="form-group">
                        <label>Group No.: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.groupNo}
                            onChange={this.onChangeGroupNo}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create pedology Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default createPedology;