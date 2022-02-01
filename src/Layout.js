import React from 'react';
import {Link, Outlet} from 'react-router-dom';


export default function Layout (){
    return(
        <div>
            <h1>Restaurant Management Application</h1> 
            <Link to='/dashboard'><button>Dashboard</button></Link>&nbsp;&nbsp;
            <Link to='/kitchen'><button>Kitchen</button></Link>&nbsp;&nbsp;
            <Link to='/customer'><button>Customer Display</button></Link>
            <hr/>
            <Outlet/>
            
        </div>
    );
} 