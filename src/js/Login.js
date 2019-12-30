import React, { Fragment } from 'react';
import logo from '../img/logo.png';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userId : '',
            password : ''

        }
    }

    onUserIdChange = (event) => {
        this.setState({userId : event.target.value});
    }    

    onPasswordChange = (event) => {
        this.setState({password : event.target.value});
    }    

    onSubmitRegister = () =>{
        alert("register");        
    }

    onSubmitSignIn = () => {
       
        console.log(this.state);
       
        fetch('http://localhost:5000/login', {
            method : 'post',
            headers :{ 'Content-Type' : 'application/json'},
            body : JSON.stringify({
                userId : this.state.userId,
                password : this.state.password
            })
        }).then(response => {
                console.log(response);
                this.props.onRouteChange('home');
                // if(data === "success"){
                    
                // }            
            }).catch(error => {
                
                console.error(error);    
            })
        
        
        // fetch('http://localhost:5000/', {
        //     headers : { 
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //      }
      
        //   })
        // .then(response => response.json())
        // .then(data => {
        //     this.props.onRouteChange('home');
        // }).catch(error => {
                
        //             console.error(error);    
        //         })
    
    }

    
    render(){
        const { onRouteChange } = this.props; 
    return (
        <Fragment>

            <article className="br2 ba dark-gray pa3 b--black-10 mv4 w-100 w-150-m w-25-l mw6 center">

                <div className="tc dib">
                    <img src={logo} className="br-100 h4 w4 dib ba b--black-05 pa2 " title="Logo" alt="logo"></img>
                    <form className="measure">
                        <div className="form-group">

                            <input type="text" 
                                className="form-control grow" 
                                id="username"
                                aria-describedby="username" 
                                placeholder="Enter Username" 
                                onChange = {this.onUserIdChange} />
                            <small id="emailHelp" className="form-text text-muted">Never share your username with anyone else.</small>
                        </div>
                        <div className="form-group">

                            <input type="password" 
                                className="form-control grow" 
                                id="exampleInputPassword1" 
                                placeholder="Enter Password" 
                                onChange = {this.onPasswordChange}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" onClick={ this.onSubmitSignIn } className="btn btn-primary mh1">Log In</button>
                        {/* <button type="submit" onClick={ this.onSubmitRegister } className="btn btn-primary mh1">Register</button> */}
                    </form>
                </div>
            </article>
        </Fragment>
    );
    }
}
export default Login
