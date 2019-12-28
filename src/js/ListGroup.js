import React, { Fragment } from 'react';

const ListGroup=({pdata})=>{
    
    var doc={}
    for(var i of pdata){
        if(i.Doctor in doc){
            doc[i.Doctor]++
        }
        else{
            doc[i.Doctor]=1
        }
    }
    
        return(
            <Fragment>
                
                <ul className="list-group">
                    {Object.keys(doc).map((keys,index)=>(
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {keys}
                            <span className="badge badge-primary badge-pill">{doc[keys]}</span>
                        </li>
                        ))
                    }
                
                
                </ul>
            </Fragment>
        );
    
   
}
export default ListGroup; 