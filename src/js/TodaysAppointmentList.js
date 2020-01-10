import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import moment from "moment";

var today =new Date();
var today_moment=moment(today)
var tomorrow=today_moment.add(1,'days')
// tomorrow.setDate(tomorrow.getDate()+1);
// const convertMonth=(m)=>{
//     var month = new Array();
//     month[0] = "01";
//     month[1] = "02";
//     month[2] = "03";
//     month[3] = "04";
//     month[4] = "05";
//     month[5] = "06";
//     month[6] = "07";
//     month[7] = "08";
//     month[8] = "09";
//     month[9] = "10";
//     month[10] = "11";
//     month[11] = "12";
//     return month[m.getMonth()]
// }
// const convertDay=(day)=>{
//     if (day.length<2){
//         return "0"+day;
//     }
//     else{
//         return day;
//     }
// }

class TodaysAppointmentList extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            
            startDate: today_moment.format("YYYY-MM-DD"),//String(today.getFullYear())+"-"+String(convertMonth(today))+"-"+convertDay(String(today.getDate())),
            endDate: tomorrow.format("YYYY-MM-DD"),//String(tomorrow.getFullYear())+"-"+String(convertMonth(tomorrow))+"-"+convertDay(String(tomorrow.getDate())),
            data: []
        }
    }
    componentDidMount=()=>{
        
        this.getAppointmentDetails(this.state.startDate,this.state.endDate);
    }
    getAppointmentDetails=(startDate,endDate)=>{
        fetch('http://localhost:5000/appointmentdetails',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startDate:startDate,
                endDate:endDate
            })
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({data:responseJson})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
        return(
            <ListGroup>
                {/* s{console.log(String(today.getFullYear())+"-"+String(convertMonth(today))+"-"+convertDay(String(today.getDate())))} */}
                {/* {tomorrow.format("YYYY-MM-DD")} */}
                {Object.keys(this.state.data).map((keys,index)=>(
                        <ListGroup.Item key={index}>{this.state.data[keys].PatientName}</ListGroup.Item>
                ))}
                
            </ListGroup>
        );
    }
}
export default TodaysAppointmentList;