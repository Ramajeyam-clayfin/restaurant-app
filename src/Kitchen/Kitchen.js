import React from 'react';
import {Button, Nav, Navbar, NavbarBrand, Container} from 'react-bootstrap'; 
import { Link, Outlet} from 'react-router-dom';

export default function Kitchen(){
    
    return(
    <div>
       
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavbarBrand>Kitchen</NavbarBrand>
                <Nav className="me-auto">
                    <Link to='/kitchen'><Button>Orders</Button></Link> &nbsp;&nbsp;
                    <Link to='/kitchen/stocks'><Button>Stocks</Button></Link>
                   
                </Nav>
            </Container>
        </Navbar><br/><br/>
        <Outlet/> 
    </div>
    );
}