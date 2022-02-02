import React from "react";
import {Button, Nav, Navbar, NavbarBrand, Container} from 'react-bootstrap'; 
import { Link, Outlet} from 'react-router-dom';


export default function Empdetails(){

    return(
        <div>
            
            <Navbar bg="primary" variant="dark">
            <Container>
                <NavbarBrand>Employee</NavbarBrand>
                <Nav className="me-auto">
                    <Link to='/employee'><Button>Employee Details</Button></Link> &nbsp;&nbsp;
                    <Link to='/employee/add_empoyee'><Button>Add Employee</Button></Link>
                </Nav>
            </Container>
        </Navbar><br/><br/>
        <Outlet/> 
        
        </div>
    );
}