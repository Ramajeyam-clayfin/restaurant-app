import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import Editdisplay from './Edit_display';
import './edit.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Display(){
    const { show, view, setView} = useContext(Datas);
    const showHide = view ? "edit display-none" : "edit display-block";

    const showEdit=()=>{
        setView(true);
    }

    return(
        <div>
            <Editdisplay/>
            <div className={showHide}>
            <Button onClick={showEdit} style={{float:'right', marginRight:20}} >Edit Menu</Button><br/><br/> 
                <h3>Today's Menu</h3><br/> 
                <Container>
                    <Row>
                        {show.length ? show.map((s, index) => (
                            <Col key={index}>
                                <Card style={{ width: '18rem' }} className='card' >
                                    <Card.Img  variant="top" src={s.dishImg} style={{height:250}} alt=''/>
                                    <Card.Body>
                                        <Card.Title>{s.dishName}</Card.Title>
                                        <Card.Text>Price : ₹ {s.dishPrice}</Card.Text> 
                                    </Card.Body>
                                </Card>
                                <br/><br/>
                            </Col>
                        ))
                        :' Come Back Later ...!' }   
                    </Row>
                </Container> 
            </div>
        </div>
    );
}