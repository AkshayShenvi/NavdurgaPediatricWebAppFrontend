import React, { Fragment } from 'react';
import Logo from './logo.png';
import './ProfileImage.css';

const ProfileImage=()=>{
    return(
        <Fragment>
            <img src={Logo} alt="Profile Image" className="profImg"/>
        </Fragment>
    );
}
export default ProfileImage;
