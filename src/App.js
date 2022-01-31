import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Orderstatus from './Kitchen/Orderstatus';
import Dashboard from './Components/Dashboard';
import Orders from './Components/Orders';
import Menu from './Components/Menu';
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
          <Route path='/kitchen' element={<Orderstatus/>} />
        </Route>
      </Routes>
     
    </div>
  );
}


