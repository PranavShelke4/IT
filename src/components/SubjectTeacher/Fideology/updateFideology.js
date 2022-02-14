import React from 'react';
import './updateFideology.css';

function updateFideology(){
    return ( 
    <div className='upd_section'>
        <label className="label l1">Date</label><br />
        <input className="update" type="date" name="date" placeholder="Date" /><br />
        <label className="label l2">Activity Name</label><br />
        <input className="update" type="text" name="activity" placeholder="Activity Name" /><br />
        <label className="label l3">Subject</label><br />
        <input className="update" type="text" name="subject" placeholder="Subject Name" /><br />
        <label className="label l4">Group No.</label><br />
        <input className="update" type="number" name="number" placeholder="Group No." />

        <a href='/'><button className="submit">Submit</button></a>
        <a href='/'><button className="cancel">Cancel</button></a>
    </div>
    );
}

export default updateFideology;