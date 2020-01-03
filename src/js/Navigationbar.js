import React from 'react';
import Logo from '../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Settings from './Settings'
import LandingPage from './LandingPage';
import Button from 'react-bootstrap/Button'
import createBrowserHistory from 'history/createBrowserHistory';

// class Navigationbar extends React.Component {
const Navigationbar = ({onRouteChange}) =>{
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div>
                    <title>Navdurga Fracture And Accident Center</title>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'#'} className="navbar-brand"> 
                                <img src={Logo} width="30" height="30" alt="" />
                            </Link>
                            </li>
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/settings'} className="nav-link">Settings</Link></li>
                            
                        </ul>
                        <Button onClick={ () =>onRouteChange('login') }  variant="primary">Logout</Button>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route path='/settings' component={Settings} />
                        
                    </Switch>
                </div>
            </Router>
        );
    

}
export default Navigationbar;

