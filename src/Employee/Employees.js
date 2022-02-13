import React, {useContext, useState} from 'react';
import {Datas} from '../Components/Context';
import {Container, Row, Col, Card, Button, FormLabel } from 'react-bootstrap';
import Female from '../Images/female.png';
import Male from '../Images/male.png';
import './edit.css';


export default function Employees(){
    const {emp} = useContext(Datas);
    const [view, setView] = useState(false);
    // const [Id, setId] = useState('');
    let details;
    const showHide = view ? "edit display-none" : "edit display-block";
    const Hideshow = view ? "edit display-block" : "edit display-none";

    const showEdit=(id)=>{
        setView(true);
        // setId(id);
        details = emp.filter(s => s.id === id);
        console.log(details)

    }

    return(
        <div>
            <div className={showHide}>
                <Container>
                    <Row>
                        {emp.map((s, index) => (
                            <Col key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img  variant="top" src={(s.gender)==='Male'? Male : Female} style={{height:250}} alt=''/>
                                    <Card.Body>
                                        <Card.Title>{s.name}</Card.Title>
                                        <Card.Text>Employee ID : {s.empid}</Card.Text>
                                        <Card.Text>Designation : {s.position}</Card.Text>
                                        <Button onClick={()=>showEdit(s.id)}>More Details</Button>  
                                    </Card.Body>
                                </Card>
                                <br/><br/>
                            </Col>
                        ))}   
                    </Row>
                </Container>
            </div>
            <div className={Hideshow}>
            <Button onClick={()=> setView(false)}>Back</Button>
            {emp.map((s, index) => (
                <Col style={{float:'left', textAlign:'left'}}>
                    <Row> <FormLabel >Name : {s.name}</FormLabel> </Row>
                    <Row> <FormLabel>Employee ID : {s.empid}</FormLabel> </Row>
                    <Row> <FormLabel>Designation : {s.position}</FormLabel> </Row>
                    <Row> <FormLabel>Gender : {s.gender}</FormLabel> </Row>
                    <Row> <FormLabel>Date Of Birth : {s.dob}</FormLabel> </Row>
                    <Row> <FormLabel>Branch : {s.branch}</FormLabel> </Row>
                    <Row> <FormLabel>Mobile : {s.mobile}</FormLabel> </Row>
                    <Row> <FormLabel>Email : {s.email}</FormLabel> </Row>
                    <Row> <FormLabel>Address : <br/> {s.line1}<br/> {s.line2}<br/> {s.city}<br/> {s.state} - {s.zipcode}</FormLabel> </Row>
                    <Row> <FormLabel>Joining Date : {s.joindate}</FormLabel> </Row>
                    <Row> <FormLabel>Salary : ₹ {s.salary}</FormLabel> </Row>
                </Col>
            ))}
            </div>
        </div>
    );
}