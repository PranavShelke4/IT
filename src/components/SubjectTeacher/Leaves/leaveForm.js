import React from 'react';
import './leaveForm.css';

function leaveForm(){
    return (
        <div className='leave-main'>
            <div class="leaves_box">
            <input class="upadateLeft" type="text" name="fname" placeholder="First name" />
            <input class="upadateRight" type="text" name="lname" placeholder="Last name" />
            <input class="upadateLeft" type="text" name="designation" placeholder="Designation" />
            <input class="upadateRight" type="number" name="days" placeholder="No. of Days" />
            <input class="upadateLeft" type="text" name="type" placeholder="Type of Leaves" />
            <input class="upadateRight" type="email" name="email" placeholder="Email" /><br />
            <button class="submit">Submit</button>
            <button class="cancel">Cancel</button>
  </div>
</div>
    );
}

export default leaveForm;