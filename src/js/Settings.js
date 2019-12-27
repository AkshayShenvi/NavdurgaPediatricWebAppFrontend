import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Treatment from './Treatment'

const Settings = () => {
    return (
        <Fragment>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#treatment">Treatment</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link  href="#test">Update Treatment</Nav.Link>
                <Nav.Link href="#pricing">Add Treatment</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form> */}
        
        </Navbar>
        <Treatment/>
        </Fragment>
    );

}
  
export default Settings;
        
