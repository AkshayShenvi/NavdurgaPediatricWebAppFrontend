import React from 'react';
import LoginPage from './LoginPage';
import Navigationbar from './Navigationbar';


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            
            route: ''
        }
    }

    componentDidMount() {
        this.setState({route : 'login'})
        fetch('http://localhost:5000/', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(response => response.json())
        .then(data => {
            console.log('OK');
        }).catch(error =>{
            console.log("error ",error);
        })
    }

    onRouteChange=(s)=> {
        this.setState({route : s});
    }

    render() {
        return (
            <div>    
                          
                { this.state.route === 'login'   
                    ? <LoginPage onRouteChange = {this.onRouteChange}/>    
                    :  <Navigationbar onRouteChange = {this.onRouteChange}/>     
                }

            </div>
        );
    }

}

export default Main;
