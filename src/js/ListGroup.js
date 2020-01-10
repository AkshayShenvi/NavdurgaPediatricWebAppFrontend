import React, { Fragment } from 'react';

class ListGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: props.dates.startDate,
            endDate: props.dates.endDate,//"2019-12-31",
            view: props.dates.view,
            data: []
        }
    }
    // var doc={}
    // for(var i of pdata){
    //     if(i.Doctor in doc){
    //         doc[i.Doctor]++
    //     }
    //     else{
    //         doc[i.Doctor]=1
    //     }
    // }
    componentDidMount() {
        this.getAllAppointments(this.state.startDate, this.state.endDate)
    }
    
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    getAllAppointments = (startDate, endDate) => {
        fetch('http://localhost:5000/appointmentcount', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startDate: startDate,
                endDate: endDate

            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                // console.log(typeof responseJson)
                // if(){
                
                // }
                this.setState({ data: responseJson })
            }).catch(error => {
                console.log(error);
            })
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.view !== prevState.view){
            this.setState({view:nextProps.view,
                            startDate:nextProps.startDate,
                            endDate:nextProps.endDate})
        }
        else{
            return null
        }
    }
    render() {
        if(this.isEmpty(this.state.data)){
            return(
                <Fragment>
                    <h5>No Appointments for this {this.state.view}</h5>
                </Fragment>
            )
        }
        else{
            return (
            
                // <Fragment>
                //     {console.log(this.state.data)}
                // </Fragment>
                <Fragment>
                    {console.log(this.state.startDate)}
                    <ul className="list-group">
                        {Object.keys(this.state.data).map((keys,index)=>(
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            
                            {this.state.data[keys].DoctorName}
                            
                            {/* {this.state.data[1].DoctorName} */}
                            <span className="badge badge-primary badge-pill">
                               {/* {this.state.data[keys]}  */}
                               {this.state.data[keys].count}
                                {/* {this.state.data[1].count} */}
                            </span>
                        </li>
                        )) 
                        }
    
                    </ul>
                </Fragment>
            );
    
        }
        

    }
}
export default ListGroup; 