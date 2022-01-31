import React, {useContext} from 'react';
import {Datas} from './Context';
import {Button} from 'react-bootstrap';

export default function Orders() {
    const {orders, setOrders} = useContext(Datas);

    const handleDelete = (id) => {
        const delnotes = orders.filter((to) => to.dishId !== id); 
        setOrders([...delnotes]); 
      };

    return(
        <div>
            <div>
                {orders.length ? orders.map((e, index) => (
                    <div key={index}>
                        <img src={e.dishImg} alt='' style={{height: 50, minWidth:50}}/>
                        <p>{index+1}. {e.dishName}</p>
                       Status :  <b>{e.status}</b><br/>
                       <Button onClick={()=>handleDelete(e.dishId)}>Cancel</Button>
                        <br/><br/>  
                    </div>
                ))
                : ' Nothing Else Is Here' }
                
            </div>
            
        </div>
    );
}