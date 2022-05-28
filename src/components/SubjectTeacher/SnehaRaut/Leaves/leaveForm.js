import React from 'react';
import './leaveForm.css';

function leaveForm(){
    return (
        <div className='leave-main'>
            <div className="leaves_box">
            <input className="upadateLeft" type="text" name="fname" placeholder="First name" />
            <input className="upadateRight" type="text" name="lname" placeholder="Last name" />
            <input className="upadateLeft" type="text" name="designation" placeholder="Designation" />
            <input className="upadateRight" type="number" name="days" placeholder="No. of Days" />
            <input className="upadateLeft" type="text" name="type" placeholder="Type of Leaves" />
            <input className="upadateRight" type="email" name="email" placeholder="Email" /><br />
            <button className="submit">Submit</button>
            <button className="cancel">Cancel</button>
  </div>
</div>
    );
}

export default leaveForm;