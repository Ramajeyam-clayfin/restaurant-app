import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Button} from 'react-bootstrap';
// import {Link} from 'react-router-dom'; 

export default function Orderstatus (){
    const {orders, setOrders} = useContext(Datas);

    const Takeorder = (id) => {
        const updatedarray = orders.map((obj) => {
            if (obj.dishId === id) {
              obj = { ...obj, status: 'Dish is Preparing' };
            }
            return obj;
          });
    
          setOrders(updatedarray);
        
    }
    const Ready = (id) => {
        
        const updatedarray = orders.map((obj) => {
            if (obj.dishId === id) {
              obj = { ...obj, status: 'Dish is Ready' };
            }
            return obj;
          });
    
          setOrders(updatedarray);
    }
    return(
        <div>
            <h3>Kitchen Menu</h3>
            {orders.length ? orders.map((s, index) => (
                    <div key={index}>
                        <img src={s.dishImg} alt='' style={{height: 50, minWidth:50}}/>
                        <p>{index+1}. {s.dishName}</p>
                        <Button onClick={()=>Takeorder(s.dishId)}>Take Order</Button>
                        &nbsp;&nbsp;
                        <Button onClick={()=>Ready(s.dishId)}>Ready</Button>
                        <br/><br/>  
                    </div>
                ))
                :' No orders.. Just Sitback and Relax' }
        </div>
    );
}