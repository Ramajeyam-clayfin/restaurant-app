import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DataProvider} from './Components/Context';

ReactDOM.render(
<BrowserRouter>
  <DataProvider>
    <App />
  </DataProvider>
</BrowserRouter> ,
  document.getElementById('root')
);
