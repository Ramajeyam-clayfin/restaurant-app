import React, {useContext} from 'react';
// import { Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Datas} from './Context';


export default function Dashboard(){
    const {dishes} = useContext(Datas);
    
    return(
    <div>
        <h2>Dashboard Page</h2>
        <Card>
                        {/* <Card.Img src={e.dishImg}/> */}
            <Card.Body>
                <Card.Title>DOSA</Card.Title>
                <Card.Text>Price : ₹ </Card.Text>
                <Card.Button>Select</Card.Button>
            </Card.Body>
        </Card>
        <div>
            {dishes.map(e => (
                <div>
                    {/* <Card>
                        <Card.Img src={e.dishImg}/>
                        <Card.Body>
                            <Card.Title>{e.dishName}</Card.Title>
                            <Card.Text>Price : ₹ {e.dishPrice}</Card.Text>
                            <Card.Button>Select</Card.Button>
                        </Card.Body>
                    </Card> */}
                    {/* <img src={e.dishImg} style={{height: 200, minWidth:300}}/> */}
                    <br/>  
                </div>
            ))}
            
        </div>
        
    </div>
    );
}