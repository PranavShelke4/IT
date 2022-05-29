import React from 'react';
// import '';

function Profile(){
    return (
        <div class='profile-main'>
            <div class="profile">
            <div class="profile_box">
            <label class="security">Security Setting</label><br />
            <input class="update" type="text" name="username" placeholder="Username" /><br />
            <input class="update" type="text" name="cur_pass" placeholder="Current Password" /><br />
            <input class="update" type="text" name="new_pass" placeholder="New Password" /><br />
            <button class="submit">Submit</button>
            </div>
            </div>
    

     <div class="profile_box2">
        <label class="security">Account Setting</label><br />
        <input class="upadateLeft" type="text" name="fname" placeholder="First name" />
        <input class="upadateRight" type="text" name="lname" placeholder="Last name" />
        <select class="upadateLeft" name="gender" placeholder="Gender">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <input class="upadateRight" type="text" name="number" placeholder="Mobile no" />
        <input class="upadateLeft" type="email" name="email" placeholder="Email" />
        <input class="upadateRight" type="text" name="degree" placeholder="Degree" />
        <input class="upadateRight fileImg" type="file" name="number" placeholder="Image" /><br />
        <button class="submit">Submit</button>
     </div>
</div>);
}

export default Profile;