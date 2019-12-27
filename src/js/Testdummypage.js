import React, { Fragment } from 'react';
import Calendar from './Calendar';
import {data} from './testdata';


export default class Test extends React.PureComponent {
    constructor(props){
        super(props)
        this.state={
            pdata:data
        }
    }
    
    render(){
        return(
            <Fragment>
                {/* {console.log(this.state.pdata)} */}
                <Calendar pdata={this.state.pdata}/>
            </Fragment>
        );
    }
}
