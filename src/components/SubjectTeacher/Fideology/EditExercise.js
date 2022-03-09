import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditExercise extends Component {

    constructor(props){
        super();
        this.state = {
            // username: "",
            date: new Date(),
            activity: "",
            subject: "",
            group: 0
           
            // users: []
        }
        // this.onChangeUsername = this.onChangeUsername.bind(this);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeGroup = this.onChangegroup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    // username: res.data.username,
                    date: new Date(res.data.date),
                    activity: res.data.activity,
                    subject: res.data.subject,
                    group: res.data.group
                    
                })
            })
            .catch(function (error){
                console.log(error);
            })

        // axios.get('http://localhost:5000/users/')
        //     .then(response => {
        //         if(response.data.length > 0) {
        //             this.setState({ 
        //                 users: response.data.map(user => user.username)
        //             });
        //         }
        //     })
    }

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
        const exercise = {
            // username: this.state.username,
            date: this.state.date,
            activity: this.state.activity,
            subject: this.state.subject,
            group: this.state.group
            
        }

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit Pedelogy</h3>
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
                        <label>Activity Name: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.activity}
                            onChange={this.onChangeActivity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject : </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.subject}
                            onChange={this.onChangeSubject}
                        />
                    </div>
                    <div className="form-group">
                        <label>Group No : </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.group}
                            onChange={this.onChangeGroup}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Edit Pedelogy" className="btn btn-primary" />
                    </div>
                    <div className="form-group">
                        <input type="reset" value="Cancel Pedelogy" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditExercise;