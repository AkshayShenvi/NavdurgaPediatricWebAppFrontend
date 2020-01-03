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

    onRouteChange = (stateStatus) => {
        this.setState({ route: stateStatus });
    }


    render() {
        return (
            <div>

                {this.state.route === 'login'
                    ? <LoginPage onRouteChange={this.onRouteChange} />
                    : <Navigationbar onRouteChange={this.onRouteChange} />
                }

            </div>
        );
    }

}

export default Main;
