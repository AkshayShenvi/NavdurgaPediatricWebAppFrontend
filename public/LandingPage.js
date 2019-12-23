import React, { Fragment } from 'react';
import Navbar from './Navbar';
import './LandingPage.css';
import ListGroup from './ListGroup';
import ProfileImage from './ProfileImage';
import Dropdown from './Dropdown';
import Calendar from './Calendar';
import Button from './Button';
import Label from './Label';
import {data} from './testdata';

const LandingPage=()=>{
    return(
        <Fragment>
            <Navbar/>
            <div className="countainer">
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        
                        
                        <ProfileImage/>
                        <Dropdown/>
                        <ListGroup name={data[0].name} appointment={data[0].appoinntments}/>
                        <ListGroup name={data[1].name} appointment={data[1].appoinntments}/>
                        <ListGroup name={data[2].name} appointment={data[2].appoinntments}/>
                        
                        
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    {/* <Calendar className='cal'/> */}
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                    <Button/>
                    <Label />
                    <hr/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default LandingPage