import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Orderstatus from './Kitchen/Orderstatus';
import Orders from './Dashboard/Orders';
import Menu from './Dashboard/Menu';
import Display from './Customer/Display';
import Employees from './Employee/Employees';
import Addemployee from './Employee/newEmployee';
import Stockmanage from './Kitchen/Stockmanage';
import Stocks from './Dashboard/Stocks';
import Main from './OnlineOrder/Main'
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
            <Route path='/restaurant-app/employee' element={<Employees/>} />
            <Route path='/restaurant-app/employee/add_empoyee' element={<Addemployee/>} />
          
            {/* Kitchen */}
            <Route path='/restaurant-app/kitchen' element={<Orderstatus/>} />
            <Route path='/restaurant-app/kitchen/stocks' element={<Stockmanage/>} />

            {/* Customer Display  */}
            <Route path='/restaurant-app/customer' element={<Display/>}/>

            {/* Online Order */}
            <Route path='/restaurant-app/homepage' element={<Main/>}/>
      
        </Route>
      </Routes>
     
    </div>
  );
}


