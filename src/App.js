import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Orderstatus from './Kitchen/Orderstatus';
import Orders from './Dashboard/Orders';
import Menu from './Dashboard/Menu';
import Display from './Customer/Display';
import Empdetails from './Employee/employeeDetails';
import Addemployee from './Employee/newEmployee';
import Stockmanage from './Kitchen/Stockmanage';
import Stocks from './Dashboard/Stocks';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

export default function App() {
  return (
    <div className="App">
     
      <Routes>  
        <Route path='/' element={<Layout/>}>

            {/* Dashboard */}
            <Route path='/dashboard' element={<Menu/>}/>
            <Route path='/dashboard/orders' element={<Orders/>}/>
            <Route path='/dashboard/stocks' element={<Stocks/>}/>

            {/* Employee */}
            <Route path='/employee' element={<Empdetails/>} />
            <Route path='/employee/add_empoyee' element={<Addemployee/>} />
          
            {/* Kitchen */}
            <Route path='/kitchen' element={<Orderstatus/>} />
            <Route path='/kitchen/stocks' element={<Stockmanage/>} />

            {/* Customer Display  */}
            <Route path='/customer' element={<Display/>}/>
      
        </Route>
      </Routes>
     
    </div>
  );
}


