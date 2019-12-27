import React, { Fragment, Component } from 'react';

import '../css/LandingPage.css';
import ListGroup from './ListGroup';
import ProfileImage from './ProfileImage';
import DropdownSelect from './DropdownSelect';
import Button from './Button';
import Label from './Label';
import {data} from './testdata';
import Calendar1 from './Calendar1';



const dropDownList=data.map((doctors,i)=>{
    return <ListGroup 
        key={i} 
        name={data[i].name} 
        appointment={data[i].appointments}
        />
    
    })

const todaysAppointmentList=data.for
class LandingPage extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    onDropDownElementClick(event){
        console.log(event.target.innerText);
    }
    daySelected(event){
        console.log(event)
    }
    render(){
        return(
            <Fragment>
               
                <div className="countainer">
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 tc'>
                            
                            
                            <ProfileImage/>
                            <DropdownSelect elementClick={this.onDropDownElementClick} />
                            {dropDownList}
                            
                            
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <Calendar1 selectedDay={this.daySelected}/>
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
}
    
    

export default LandingPage