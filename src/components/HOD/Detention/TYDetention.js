import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../components/ClassTeacher/FirstYear/Detention/DetentionList.css";

import Detentionlists from '../../../api/ThirdYear/Detentionlist';

const Detentionlist = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.detentionlist.date}</td>
        <td>{props.detentionlist.description}</td>
        <td><a  rel="noreferrer" target='_blank' href={props.detentionlist.link}>{props.detentionlist.link}</a></td>
        
    </tr>
)

class DetentionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          detentionlists: []
        }

        this.deleteDetentionlist = this.deleteDetentionlist.bind(this);
    }

    componentDidMount() {
      Detentionlists.get('/get-detentionlists')
            .then(res => {
                this.setState({ detentionlists: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteDetentionlist(id) {
      Detentionlists.delete('/delete-detentionlist/' +id)
            .then(res => console.log(res.data));

        this.setState({ detentionlists: this.state.detentionlists.filter(el => el._id !== id)})
    }

    detentionlistsList() {
        return this.state.detentionlists.map(currentdetentionlist => {
            return <Detentionlist detentionlist={currentdetentionlist} deleteDetentionlist={this.deleteDetentionlist} key={currentdetentionlist._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
            <h3 className='fidoh3'>Third Year Detention Lists</h3>
                <table className='detention-table'>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>Year</th>
		                    <th>Link</th>
		                   
                        </tr>
                    </thead>
                    <tbody>
                        {this.detentionlistsList()}
                    </tbody>
                </table>
                
            </div>
            </div>
         );
    }
}
 
export default DetentionList;

