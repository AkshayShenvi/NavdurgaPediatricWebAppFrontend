import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './js/serviceWorker';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './js/LoginPage';
import LandingPage from './js/LandingPage';
import Calendar from './js/Calendar';







ReactDOM.render(<LandingPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
