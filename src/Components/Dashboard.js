import React from 'react';
import {Button, Nav, Navbar, NavbarBrand, Container} from 'react-bootstrap'; 
import { Link, Outlet} from 'react-router-dom';

export default function Dashboard(){
    
    return(
    <div>
        {/* <h2>Dashboard Page</h2> */}
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavbarBrand>Dashboard</NavbarBrand>
                <Nav className="me-auto">
                    <Link to='/dashboard'><Button>Menu</Button></Link> &nbsp;&nbsp;
                    <Link to='/dashboard/orders'><Button>Orders</Button></Link>
                   
                </Nav>
            </Container>
        </Navbar><br/><br/>
        {/* <Link to='/dashboard'><Button>Menu</Button></Link> &nbsp;&nbsp;
        <Link to='/dashboard/orders'><Button>Orders</Button></Link><br/><br/> */}
        <Outlet/> 
    </div>
    );
}