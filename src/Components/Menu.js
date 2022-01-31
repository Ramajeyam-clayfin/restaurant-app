import React, {useContext} from 'react';
import {Datas} from './Context';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Menu(){
    const {dishes, setOrders, orders} = useContext(Datas);
    

    const Orderdish = (e, id) =>{
        e.preventDefault();
        let push = dishes.find( ({dishId}) => dishId === id );
        const updateUsers = [
            ...orders,
            {
              dishId: push.dishId,
              dishName: push.dishName,
              dishImg: push.dishImg,
              dishPrice: push.dishPrice,
              status: push.status,
              no: push.no,
            }
          ];
        
        setOrders(updateUsers);
        alert(`${push.dishName} is added to Orders`);
    }
    return (
        <div>
            <Container>
                <Row>
                    {dishes.map((s, index) => (
                        <Col key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img  variant="top" src={s.dishImg} style={{height:250}} alt=''/>
                                <Card.Body>
                                    <Card.Title>{s.dishName}</Card.Title>
                                    <Card.Text>Price : ₹ {s.dishPrice}</Card.Text>
                                    <Button onClick={(e)=>Orderdish(e, s.dishId)}>Order Dish</Button>  
                                </Card.Body>
                            </Card>
                            <br/><br/>
                        </Col>
                    ))}   
                </Row>
            </Container>
        </div>
    );
}