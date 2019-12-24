import React, { Fragment, Component } from 'react';
import Navbar from './Navbar';
import '../css/LandingPage.css';
import ListGroup from './ListGroup';
import ProfileImage from './ProfileImage';
import DropdownSelect from './DropdownSelect';
import Calendar2 from './Calendar2';
import Button from './Button';
import Label from './Label';
import {data} from './testdata';
import Calendar1 from './Calendar1';
import Calendar from './Calendar';
import TodaysAppointmentList from './TodaysAppointmentList';



const dropDownList=data.map((doctors,i)=>{
    return <ListGroup 
        key={i} 
        name={data[i].name} 
        appointment={data[i].appointments}
        />
    
    })


class LandingPage extends Component{
    constructor(){
        super()
        this.state={
            data: data,
            
        }
    }
    onDropDownElementClick(event){
        console.log(event.target.innerText);
    }
    onSelect(event){
        console.log(event)
    }
    render(){
        return(
            <Fragment>
                <Navbar/>
                <div className="countainer">
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 tc'>
                            
                            
                            <ProfileImage/>
                            <DropdownSelect elementClick={this.onDropDownElementClick} />
                            {dropDownList}
                            
                            
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <Calendar onSelect={this.onSelect}/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        <Button/>
                        <Label />
                        <TodaysAppointmentList/>
                        <hr/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
    
    

export default LandingPage