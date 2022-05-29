import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
//import './ExercisesList.css';

import Studymaterials from '../../../../api/GhodeMadam/Studymaterial';

const Studymaterial = props => (
    <tr>
        {/* <td>{props.exercise.username}</td> */}
        <td>{props.studymaterial.date}</td>
        <td>{props.studymaterial.description}</td>
        <td><a href={props.studymaterial.link}>{props.studymaterial.link}</a></td>
        
        <td>
            <Link to={"/subject-teacher/priyanka-ghode/studymaterial/edit/"+props.studymaterial._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => {props.deleteStudymaterial(props.studymaterial._id) }} ><i className='bx bx-trash'></i></span>
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class StudyMaterial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studymaterials: []
        }

        this.deleteStudymaterial = this.deleteStudymaterial.bind(this);
    }

    componentDidMount() {
        Studymaterials.get('/get-studymaterials')
            .then(res => {
                this.setState({ studymaterials: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteStudymaterial(id) {
        Studymaterials.delete('/delete-studymaterial/' +id)
            .then(res => console.log(res.data));

        this.setState({ studymaterials: this.state.studymaterials.filter(el => el._id !== id)})
    }

    studymaterialsList() {
        return this.state.studymaterials.map(currentstudymaterial => {
            return <Studymaterial studymaterial={currentstudymaterial} deleteStudymaterial={this.deleteStudymaterial} key={currentstudymaterial._id} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                <h3 className='fidoh3'>Pedelogy Activities</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    <th>Date</th>
		                    <th>Decsription</th>
		                    <th>Link</th>
		                    <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.studymaterialsList()}
                    </tbody>
                </table>
                <Link to={'/subject-teacher/priyanka-ghode/add-studymaterial'}><div className='add'>Add</div></Link>
            </div>
            </div>
         );
    }
}
 
export default StudyMaterial;

