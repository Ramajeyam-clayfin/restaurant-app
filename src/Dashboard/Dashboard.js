import React from 'react';
import {Button, Nav, Navbar, NavbarBrand, Container, NavDropdown} from 'react-bootstrap'; 
import { Link, Outlet} from 'react-router-dom';

export default function Dashboard(){
    
    return(
    <div>
       
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavDropdown title="Dashboard" >
                    <Link to='/dashboard'><NavDropdown.Item>Menu</NavDropdown.Item></Link>
                    <NavDropdown.Item >hi</NavDropdown.Item>
                    <NavDropdown.Item >here</NavDropdown.Item>
                </NavDropdown>
                <NavbarBrand>Dashboard</NavbarBrand>
                <Nav className="me-auto">
                     &nbsp;&nbsp;
                    <Link to='/dashboard/orders'><Button>Orders</Button></Link>&nbsp;&nbsp;
                    <Link to='/dashboard/stocks'><Button>Stocks</Button></Link>
                   
                </Nav>
            </Container>
        </Navbar><br/><br/>
        <Outlet/> 
    </div>
    );
}