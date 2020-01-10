import React, { Fragment } from 'react';
import Logo from '../img/logo.png';
import '../css/ProfileImage.css';

const ProfileImage=()=>{
    return(
        <Fragment>
            <img src={Logo} alt="Profile" className="profImg"/>
        </Fragment>
    );
}
export default ProfileImage;
