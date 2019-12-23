import React, { Fragment, Component } from 'react';
import Navbar from './Navbar';
import './LandingPage.css';
import ListGroup from './ListGroup';
import ProfileImage from './ProfileImage';
import DropdownSelect from './DropdownSelect';
import Calendar from './Calendar';
import Button from './Button';
import Label from './Label';
import {data} from './testdata';



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
}
    
    

export default LandingPage