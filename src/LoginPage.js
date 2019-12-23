import React from 'react';
import Login from './Login';
import './LoginPage.css';
import Header from './Header';
const LoginPage =()=>{
    return(
        <div className="tc landingPage">
            <title>Navdurga Fracture And Accident Center</title>
            <Header />
            <Login/>
        </div>
    );
}

export default LoginPage;