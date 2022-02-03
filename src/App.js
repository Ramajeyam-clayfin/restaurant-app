import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Orderstatus from './Kitchen/Orderstatus';
import Dashboard from './Dashboard/Dashboard';
import Orders from './Dashboard/Orders';
import Menu from './Dashboard/Menu';
import Display from './Customer/Display'; 
import Employee from './Employee/Employee';
import Empdetails from './Employee/employeeDetails';
import Addemployee from './Employee/newEmployee';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Stockmanage from './Kitchen/Stockmanage';
import Kitchen from './Kitchen/Kitchen';
import Stocks from './Dashboard/Stocks';

export default function App() {
  return (
    <div className="App">
     
      <Routes>  
        <Route path='/' element={<Layout/>}>
            {/* Dashboard */}
          <Route path='/dashboard' element={<Dashboard/>}/>
            <Route index element={<Menu/>}/>
            <Route path='/dashboard/orders' element={<Orders/>}/>
            <Route path='/dashboard/stocks' element={<Stocks/>}/>
            {/* Employee */}
          <Route path='/employee' element={<Employee/>} >
            <Route index element={<Empdetails/>} />
            <Route path='/employee/add_empoyee' element={<Addemployee/>} />
          </Route>
          {/* Kitchen */}
          <Route path='/kitchen' element={<Kitchen/>} >
            <Route index element={<Orderstatus/>} />
            <Route path='/kitchen/stocks' element={<Stockmanage/>} />
          </Route>
          {/* Customer Display  */}
          <Route path='/customer' element={<Display/>}/>
      
        </Route>
      </Routes>
     
    </div>
  );
}


