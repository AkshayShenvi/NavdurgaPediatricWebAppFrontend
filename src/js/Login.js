import React, { Fragment } from 'react';
import logo from '../img/logo.png';

const Login=()=>{
return(
<Fragment className="m5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
    />

    <article >

        <div className="tc dib">
            <img src={logo} className="br-100 h4 w4 dib ba b--black-05 pa2 " title="Logo" alt="logo"></img>
            <form>
                <div className="form-group">
                    <label htmlFor="EmailAddress">Email address</label>
                    <input type="text" className="form-control grow" id="username" aria-describedby="username" placeholder="Enter Username"/>
                    <small id="emailHelp" className="form-text text-muted">Never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control grow" id="exampleInputPassword1" placeholder="Enter Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </article>
    <script src="https://unpkg.com/react/umd/react.production.min.js"  />

    <script
    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
    
    />

    <script
    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
    
    />

    <script>var Alert = ReactBootstrap.Alert;</script>
</Fragment>
);
}
export default Login
