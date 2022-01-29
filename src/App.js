import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Components/Dashboard';
import './App.css';

export default function App() {
  return (
    <div className="App">
     
      <Routes>  
        <Route path='/' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
          </Route>
      </Routes>
     
    </div>
  );
}


