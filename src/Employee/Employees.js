import React, {useContext, useState} from 'react';
import {Datas} from '../Components/Context';
import {Container, Row, Col, Card, Button, FormLabel } from 'react-bootstrap';
import Female from '../Images/female.png';
import Male from '../Images/male.png';
import './edit.css';


export default function Employees(){
    const {emp} = useContext(Datas);
    const [view, setView] = useState(false);
    const [details, setDetails] = useState([]);
    const showHide = view ? "edit display-none" : "edit display-block";
    const Hideshow = view ? "edit display-block" : "edit display-none";

    const showEdit=(id)=>{
       
        setDetails (emp.filter(s => s.id === id));
        setView(true);

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
            <Button onClick={()=> setView(false)}  style={{float:'left', marginLeft:20}}>Back</Button><br/><br/>

            <Col sm={3} style={{float:'left', textAlign:"end", fontWeight:'bold', borderleft:'10px', fontSize: '20px' }}>
                    <Row> <FormLabel >Name : </FormLabel> </Row>
                    <Row> <FormLabel>Employee ID : </FormLabel> </Row>
                    <Row> <FormLabel>Designation : </FormLabel> </Row>
                    <Row> <FormLabel>Gender : </FormLabel> </Row>
                    <Row> <FormLabel>Date Of Birth : </FormLabel> </Row>
                    <Row> <FormLabel>Branch : </FormLabel> </Row>
                    <Row> <FormLabel>Mobile :</FormLabel> </Row>
                    <Row> <FormLabel>Email : </FormLabel> </Row>
                    <Row> <FormLabel>Address : </FormLabel> </Row><br/><br/><br/>
                    <Row> <FormLabel>Joining Date : </FormLabel> </Row>
                    <Row> <FormLabel>Salary : </FormLabel> </Row>
            </Col> 
            {details.map((s, index) => (
                <Col sm={7} style={{float:'left', textAlign:'left', fontWeight:'bold', fontSize: '20px'}} key={index} >
                    <Row> <FormLabel>&nbsp;&nbsp;{s.name}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.empid}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.position}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.gender}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.dob}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.branch}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.mobile}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.email}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.line1}<br/>&nbsp;&nbsp; {s.line2}<br/>&nbsp;&nbsp; {s.city}<br/>&nbsp;&nbsp; {s.state} - {s.zipcode}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;{s.joindate}</FormLabel> </Row>
                    <Row> <FormLabel>&nbsp;&nbsp;₹ {s.salary}</FormLabel> </Row><br/> <br/> <br/>
                </Col>
            ))}
            </div>
        </div>
    );
}