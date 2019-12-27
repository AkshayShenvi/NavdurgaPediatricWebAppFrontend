import React from 'react';
import LoginPage from './LoginPage';
import Navigationbar from './Navigationbar';


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            
            route: 'login'
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(response => response.json())
        .then(data => {
            console.log('OK');
        })
    }
    onRouteChange=(route)=> {
        this.setState({route : route});
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
