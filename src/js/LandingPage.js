import React, { Fragment, Component } from 'react';

import '../css/LandingPage.css';
import ListGroup from './ListGroup';
import ProfileImage from './ProfileImage';
import DropdownSelect from './DropdownSelect';
import Button from './Button';
import Label from './Label';
import Calendar from './Calendar';
import {data} from './testdata';
import TodaysAppointmentList from './TodaysAppointmentList';



class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pdata:data,
            view:'DAY'
        }
    }
    
    onDropDownElementClick(event){
        console.log(event.target.innerText);
    }
    
    render(){
        return(
            <Fragment>
               
                <div className="countainer">
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 tc'>
                            
                            
                            <ProfileImage/>
                            <DropdownSelect elementClick={this.onDropDownElementClick} />
                            
                            <ListGroup pdata={this.state.pdata}/>
                            
                       
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <Calendar pdata={this.state.pdata}/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        <Button/>
                        <Label />
                        <TodaysAppointmentList pdata={this.state.pdata}/>
                        <hr/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
    
    

export default LandingPage