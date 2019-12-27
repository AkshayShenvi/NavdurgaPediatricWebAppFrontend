import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Treatment.css';
import Table from './Table1'


const Treatment = () => {
    return (

        <Fragment>
        <Form className="forms">
            <Form.Group className="groups" controlId="treatment">
                <Form.Control className="inputs" type="name" placeholder="Enter treatment name" />
                <Form.Control className="inputs" type="desc" placeholder="Description" />
                <Form.Control className="inputs" type="charges" placeholder="Charges" />
                <Button variant="primary" type="submit">Add</Button>
            </Form.Group>
{/* 
            <Form.Text className="text-muted; inputs">
                This is mandatory.
            </Form.Text> */}



        </Form>
       
        <Table/>

        </Fragment>
        
    );
}

export default Treatment