import React from 'react';

const ListGroup=(props)=>{
    const {name,appointment}=props;
    const count=appointment.length   
    return(
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {name}
                <span className="badge badge-primary badge-pill">{count}</span>
            </li>
            
        </ul>
    );
}
export default ListGroup; 