import React from 'react';
import Treatment from './Treatment';
import Doctor from './Doctor';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import createBrowserHistory from 'history/createBrowserHistory';

const Settings = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/treatments'} className="nav-link"> Treatments </Link></li>
                            <li><Link to={'/doctor'} className="nav-link"> Doctors </Link></li>
                            
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/treatments' component={Treatment} />
                        <Route path='/doctor' component={Doctor} />
                        
                    </Switch>
                   
                </div>
        </Router>
    );

}

export default Settings;

