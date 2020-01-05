import React, { Fragment } from 'react';
import logo from '../img/logo.png';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            confirmPassword: '',
            isRegister: false

        }
    }

    onUserIdChange = (event) => {
        this.setState({ userId: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }

    onSubmitRegister = () => {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: this.state.userId,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.serverStatus == 2) {
                    this.props.onRouteChange('login');
                    this.onChangeStatus(false);
                } else {
                    this.props.onRouteChange('login');
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }

    onChangeStatus = (status) => {
        this.setState({ isRegister: status })
    }


    onSubmitSignIn = () => {
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: this.state.userId,
                password: this.state.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.message === 'success')
                    this.props.onRouteChange('home');

            })
            .catch((error) => {
                alert(error);
            });
    }




    render() {

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
                                    onChange={this.onUserIdChange}
                                />
                                <small id="emailHelp" className="form-text text-muted">Never share your username with anyone else.</small>
                            </div>
                            <div className="form-group">

                                <input type="password"
                                    className="form-control grow"
                                    id="password"
                                    placeholder="Enter Password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                            {this.state.isRegister ?
                                <div className="form-group">

                                    <input type="password"
                                        className="form-control grow"
                                        id="confirmPassword"
                                        placeholder="Re enter Password"
                                        onChange={this.onConfirmPasswordChange}
                                    />
                                </div> : null
                            }
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div>

                            {this.state.isRegister ?
                                <div>
                                    <p type="submit" onClick={this.onSubmitRegister} className="btn btn-primary mh1">Sign Up</p>
                                    <a onClick={() => this.onChangeStatus(false)}>Sign In</a>
                                </div>
                                : <div>
                                    <p type="submit" onClick={this.onSubmitSignIn} className="btn btn-primary mh1">Sign In</p><br />
                                    <a onClick={() => this.onChangeStatus(true)}>Sign Up</a>
                                </div>
                            }
                        </form>
                    </div>
                </article>
            </Fragment>
        );
    }
}
export default Login
