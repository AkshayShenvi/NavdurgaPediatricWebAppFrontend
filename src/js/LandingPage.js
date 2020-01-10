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
import moment from 'moment';


class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state={
            pdata:data,
            view:'DAY',
            startDate:moment(new Date()).format('YYYY-MM-DD'),
            endDate: moment(new Date()).add(1,'days').format('YYYY-MM-DD')
        }
    }
    
    onDropDownElementClick(event){
        console.log(event.target.innerText);
    }
    changeDatesAndView=(range,view)=>{
        
        this.setState({view:view,
                        startDate:range.startDate,
                        endDate:range.endDate})
    }
    
    render(){
        return(
            <Fragment>
               {console.log("Landing Page")}
                {console.log(this.state.startDate,this.state.endDate,this.state.view)}
                {console.log("End Landing Page") }
                <div className="countainer">
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 tc'>
                            
                            
                            <ProfileImage/>
                            <DropdownSelect elementClick={this.onDropDownElementClick} />
                            
                            <ListGroup dates={this.state}/>
                            
                       
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                            <Calendar getDatesAndView={this.changeDatesAndView}/>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                            <Button/>
                            <Label />
                            <hr/>
                            <TodaysAppointmentList pdata={this.state.pdata}/>
                            
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
    
    

export default LandingPage