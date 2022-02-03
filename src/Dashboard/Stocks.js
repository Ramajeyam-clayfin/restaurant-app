import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Stocks(){
    const {stocks} = useContext(Datas);

    return(
        <div>
             {stocks.length ? stocks.map((s, index)=>(
                    <div key={index}>
                        <ListGroup as="ol" style={{width:600, margin:'auto'}} >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                    <div style={{textAlign:'start'}}>
                                        <b>{index+1}</b> . {s.itemName} - &nbsp;&nbsp;
                                        {s.quantity} &nbsp;&nbsp; {s.unit} 
                                    </div>
                                </div> &nbsp;&nbsp;
                            </ListGroup.Item>
                            <br/>
                        </ListGroup>
                       
                    </div>
                ))
                : <div><br/><br/><h3>Add Stock to Display...</h3></div>
            }
        </div>
    );
} 