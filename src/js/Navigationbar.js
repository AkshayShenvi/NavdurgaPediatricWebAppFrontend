import React from 'react';
import Logo from '../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Settings from './Settings'
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import Button from 'react-bootstrap/Button'

// class Navigationbar extends React.Component {
const Navigationbar = ({onRouteChange}) =>{
    
        return (
            <Router>
                <div>
                    <title>Navdurga Fracture And Accident Center</title>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><a className="navbar-brand" href="#">
                                <img src={Logo} width="30" height="30" alt="" />
                            </a>
                            </li>
                            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/settings'} className="nav-link">Settings</Link></li>
                            
                        </ul>
                        <Button  variant="primary">Logout</Button>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/home' component={LandingPage} />
                        <Route path='/settings' component={Settings} />
                       
                    </Switch>
                </div>
            </Router>
        );
    

}
export default Navigationbar;

