import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import './App.css';

export default function App() {
  return (
    <div className="App">
     
      <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
     
    </div>
  );
}

function Home() {
  return (
    <>
        <h1>Restaurant Management Application</h1> 
    </>
  );
}

