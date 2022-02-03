import React from 'react';
import {Button, Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'; 
import {Link, Outlet} from 'react-router-dom';


export default function Layout (){
    return(
        <div>
            <h1>Restaurant Management Application</h1> 
            
            <Navbar bg="primary" variant="dark">
            <Container>
                
                <Nav className="me-auto">
                    <NavDropdown title="Dashboard" >
                        <Link to='/dashboard'><NavDropdown.Item>Menu</NavDropdown.Item></Link>
                        <Link to='/dashboard/orders'><NavDropdown.Item >Orders</NavDropdown.Item></Link>
                        <Link to='/dashboard/stocks'><NavDropdown.Item >Stocks</NavDropdown.Item></Link>
                        
                    </NavDropdown>
                     &nbsp;&nbsp;
                    <Link to='/dashboard'><Button>Dashboard</Button></Link>&nbsp;&nbsp;
                    <Link to='/employee'><Button>Employee</Button></Link>&nbsp;&nbsp;
                    <Link to='/kitchen'><Button>Kitchen</Button></Link>&nbsp;&nbsp;
                    <Link to='/customer'><Button>Customer Display</Button></Link>
                   
                </Nav>
            </Container>
        </Navbar><br/><br/>
            <hr/>
            <Outlet/>
            
        </div>
    );
} 