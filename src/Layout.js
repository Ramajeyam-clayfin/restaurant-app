import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export default function Layout (){
    return(
        <div>
            <h1>Restaurant Management Application</h1> 
            <Link to='/'><button>Dashboard</button></Link>
            <hr/>
            <Outlet/>
            
        </div>
    );
} 