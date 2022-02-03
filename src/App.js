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

export default function App() {
  return (
    <div className="App">
     
      <Routes>  
        <Route path='/' element={<Layout/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Menu/>}/>
            <Route path='/dashboard/orders' element={<Orders/>}/>
          </Route>
          <Route path='/employee' element={<Employee/>} >
            <Route index element={<Empdetails/>} />
            <Route path='/employee/add_empoyee' element={<Addemployee/>} />
          </Route>
          <Route path='/kitchen' element={<Orderstatus/>} />
          <Route path='/customer' element={<Display/>}>
      
          </Route>
        </Route>
      </Routes>
     
    </div>
  );
}


