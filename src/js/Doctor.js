import React from 'react';
import MaterialTable from 'material-table';
import { Alert } from 'react-bootstrap';
import { relativeTimeThreshold } from 'moment';

class DoctorsTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }

    }
    componentDidMount=()=>{
        this.getAllDoctors();
    }
    getAllDoctors=()=>{
        fetch('http://localhost:5000/getalldoctors',{
            method:'GET'
        }).then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({data:responseJson});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    isOK=(newData)=>{
        if(Object.keys(newData).length=== 0 || (!newData.firstname || !newData.lastname || !newData.phoneno))
            return false;
        else
            return true
    }
    onClickAdd=(newData)=>{
        fetch('http://localhost:5000/adddoctors',{
            method: 'POSt',
            headers:{
                Accept: 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                firstname:newData.firstname,
                lastname:newData.lastname,
                email:newData.email,
                phone:newData.phoneno

            })
        }).then((responseJson)=>{
            if(responseJson.status === 200){
                this.getAllDoctors();
            }
            else{
                alert("Error in Saving Doctors(Pun intended)")
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    isDifferent=(oldData,newData)=>{
        if(oldData.firstname !== newData.firstname || oldData.lastname !== newData.lastname || oldData.email !== newData.email || oldData.phoneno !== newData.phoneno){
            return true
        }
        else
        return false
    }
    conClickUpdate=(newData)=>{
        fetch('http://localhost:5000/doctor/'+newData.doctorId,{
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname:newData.firstname,
                lastname:newData.lastname,
                email:newData.email,
                phone:newData.phoneno,
            })
        }).then((responseJson)=>{
            if (responseJson.status === 200){
                this.getAllDoctors();
            }
            else{
                alert("Error in Updating Doctors")
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    onClickDelete=(id)=>{
        fetch('http://localhost:5000/doctors/'+id,{
            method: 'DELETE'
        }).then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            if(responseJson.id === id){
                // alert("Doctor Deleted Successfully");
                this.getAllDoctors();
            }else{
                alert("User not deleted!!");
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return(
            <MaterialTable
            title="Doctors"
            columns={[
                { title: 'Id', field: 'doctorId', hidden: true },
                { title: 'First Name', field: 'firstname' },
                { title: 'Last name', field: 'lastname' },
                { title: 'Email id', field: 'email' },
                { title: 'Phone Number', field: 'phoneno'}
            ]}
            data={this.state.data}
            options={{maxBodyHeight: '500px', fixedHeader:true}}
            editable={{
                onRowAdd: newData=>
                    new Promise(resolve=>{
                        setTimeout(()=>{
                            resolve();
                            if (this.isOK(newData)){
                                this.onClickAdd(newData);
                            }
                            else{
                                alert("Please provide Firstname, lastname and Phone Number")
                            }
                        },600);
                    }),
                onRowUpdate:(newData,oldData)=>
                new Promise(resolve=>{
                    setTimeout(()=>{
                        resolve();
                        if(this.isDifferent(oldData,newData)){
                            this.conClickUpdate(newData);
                        }
                        
                    },600);
                })
            }}
            actions={[
                {
                    icon: 'delete',
                    tooltip: 'Delete User',
                    onClick: (event, rowData)=>this.onClickDelete(rowData.doctorId)
                }
            ]}
        />
                
            
        )
    }
}
export default DoctorsTable;