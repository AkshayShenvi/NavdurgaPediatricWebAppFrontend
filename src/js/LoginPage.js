import React from 'react';
import Login from './Login';
import '../css/LoginPage.css';
import Header from './Header';
const LoginPage =({onRouteChange})=>{
    return(
        <div className="tc landingPage">
            <title>Navdurga Fracture And Accident Center</title>
            <Header />
            <Login onRouteChange={onRouteChange}/>
        </div>
    );
}

export default LoginPage;