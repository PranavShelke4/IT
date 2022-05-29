import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../components/ClassTeacher/FirstYear/FeedBack/Feedback.css";

import Feedbacklists from '../../../api/SecondYear/Feedbacklist';

const Feedbacklist = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.feedbacklist.year}</td>
        <td>{props.feedbacklist.faculty}</td>
        <td><a href={props.feedbacklist.link}>{props.feedbacklist.link}</a></td>
        
    </tr>
)

class FeedbackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          feedbacklists: []
        }

        this.deleteFeedbacklist = this.deleteFeedbacklist.bind(this);
    }

    componentDidMount() {
      Feedbacklists.get('/get-feedbacklists')
            .then(res => {
                this.setState({ feedbacklists: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteFeedbacklist(id) {
      Feedbacklists.delete('/delete-feedbacklist/' +id)
            .then(res => console.log(res.data));

        this.setState({ feedbacklists: this.state.feedbacklists.filter(el => el._id !== id)})
    }

    feedbacklistsList() {
        return this.state.feedbacklists.map(currentfeedbacklist => {
            return <Feedbacklist feedbacklist={currentfeedbacklist} deleteFeedbacklist={this.deleteFeedbacklist} key={currentfeedbacklist._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                
                <table className='detention-table'>
                    <thead className="thead-light">
                        <tr>
		                    <th>Year</th>
		                    <th>Faculty Name</th>
		                    <th>Link</th>
		                    
                        </tr>
                    </thead>
                    <tbody>
                        {this.feedbacklistsList()}
                    </tbody>
                </table>
                
            </div>
            </div>
         );
    }
}
 
export default FeedbackList;

