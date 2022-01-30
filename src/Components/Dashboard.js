import React from 'react';
// import {Button} from 'react-bootstrap'; 
import { Outlet} from 'react-router-dom';

export default function Dashboard(){
    
    return(
    <div>
        <h2>Dashboard Page</h2>
        <Outlet/> 
    </div>
    );
}