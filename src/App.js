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
        <Route path='/restaurant-app' element={<Layout/>}>

            {/* Dashboard */}
            <Route path='/restaurant-app/dashboard' element={<Menu/>}/>
            <Route path='/restaurant-app/dashboard/orders' element={<Orders/>}/>
            <Route path='/restaurant-app/dashboard/stocks' element={<Stocks/>}/>

            {/* Employee */}
            <Route path='/restaurant-app/employee' element={<Empdetails/>} />
            <Route path='/restaurant-app/employee/add_empoyee' element={<Addemployee/>} />
          
            {/* Kitchen */}
            <Route path='/restaurant-app/kitchen' element={<Orderstatus/>} />
            <Route path='/restaurant-app/kitchen/stocks' element={<Stockmanage/>} />

            {/* Customer Display  */}
            <Route path='/restaurant-app/customer' element={<Display/>}/>
      
        </Route>
      </Routes>
     
    </div>
  );
}


