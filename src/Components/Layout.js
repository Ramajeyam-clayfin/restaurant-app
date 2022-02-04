import React from 'react';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'; 
import {Link, Outlet} from 'react-router-dom';


export default function Layout (){
    return(
        <div>
            <h1>Restaurant Management Application</h1> 
            
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand >Rj Restaurant</Navbar.Brand>&nbsp;&nbsp;
                    <Nav className="me-auto">

                        <NavDropdown title="Dashboard" >
                            <NavDropdown.Item as={Link} to='/dashboard'>Menu</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/dashboard/orders'>Orders</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/dashboard/stocks'>Stocks</NavDropdown.Item>
                        </NavDropdown>&nbsp;&nbsp;

                        <NavDropdown title="Employee" >
                            <NavDropdown.Item as={Link}to='/employee'>Details</NavDropdown.Item>
                            <NavDropdown.Item as={Link}to='/employee/add_empoyee'>Add Employee</NavDropdown.Item> 
                        </NavDropdown>&nbsp;&nbsp;

                        <NavDropdown title="Kitchen" >
                            <NavDropdown.Item as={Link}to='/kitchen'>Orders</NavDropdown.Item>
                            <NavDropdown.Item as={Link}to='/kitchen/stocks'>Stocks</NavDropdown.Item>  
                        </NavDropdown>&nbsp;&nbsp;
                        
                        <Nav.Link as={Link} to='/customer'>Customer Menu</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br/>
            <Outlet/>
            
        </div>
    );
} 