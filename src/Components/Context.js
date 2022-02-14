import React, {createContext, useState} from 'react';
import pizza from '../Images/pizza.jpg';
import dosa from '../Images/dosa.jpg';
import idly from '../Images/idly.jpg';
import samosa from '../Images/samosa.jpg';
import lemon_juice from '../Images/lemon-juice.jpg';
import noodles from '../Images/noodles.jpg';
import {employeeData} from './employeemetaData';

export const Datas = createContext();

export const DataProvider = (props) =>{
    const [orders, setOrders] = useState([]);//orders, orderstatus, 
    const [select, setSelect] = useState([]);//customer edit menu
    const [emp, setEmp] = useState([...employeeData]); //employee details
    const [values, setValues] = useState({}); //add new employee
    const [dishes, setDishes] = useState([ { // menu
        dishId : 1,
        dishName : 'Masala Dosa',
        dishImg : dosa,
        dishPrice: 20,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 2,
        dishName : 'Idly',
        dishImg : idly,
        dishPrice: 10,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 3,
        dishName : 'Samosa',
        dishImg : samosa,
        dishPrice: 5,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 4,
        dishName : 'Lemon Juice',
        dishImg : lemon_juice,
        dishPrice: 15,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 5,
        dishName : 'Stir Fry Noodles',
        dishImg : noodles,
        dishPrice: 50,
        status: 'In Queue',
        no:0
    }, 
    {
        dishId : 6,
        dishName : 'Pizza',
        dishImg : pizza,
        dishPrice: 150,
        status: 'In Queue',
        no:0
     },
    ]);
    const [show, setShow] = useState([...dishes]);//customer display menu 
    const [view, setView] = useState(false); //customer edit menu
    const [add, setAdd] = useState(false); //kitchen add btn
    const [stocks, setStocks] = useState([]);

    return(
         <div>
            <Datas.Provider value={{add, setAdd, stocks, setStocks, values, setValues, dishes, setDishes, orders, setOrders, show, setShow, select, setSelect, view, setView, emp, setEmp}} >
                {props.children}
            </Datas.Provider>
         </div>
     );
}

export const DataConsumer = Datas.Consumer;
