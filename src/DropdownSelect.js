import React, { Fragment } from 'react';
import './Dropdown.css';
import { DropdownButton,Dropdown } from 'react-bootstrap';

const DropdownSelect=({elementClick})=>{
    const drpdn={
        visibility:'hidden'
    }
    return(
        <Fragment>
        
           <DropdownButton id="dropdown-basic-button" title="Select" style={drpdn} >
                <Dropdown.Item href="#/action-1" onClick={elementClick} >Doctor</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={elementClick}>Appointments</Dropdown.Item>
                
            </DropdownButton>
        </Fragment>
    );
}
export default DropdownSelect;