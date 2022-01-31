import React, {useContext} from 'react';
import {Datas} from './Context';
import {Button} from 'react-bootstrap';
import { Link, Outlet} from 'react-router-dom';

export default function Menu(){
    const {dishes, setOrders, orders} = useContext(Datas);
    

    const Orderdish = (e, id) =>{
        e.preventDefault();
        let push = dishes.find( ({dishId}) => dishId === id );
        const updateUsers = [
            ...orders,
            {
              dishId: push.dishId,
              dishName: push.dishName,
              dishImg: push.dishImg,
              dishPrice: push.dishPrice,
            }
          ];
        
        console.log(push);
        setOrders(updateUsers);
        console.log(orders);
        alert(`${push.dishName} is added to Orders`);
    }
    return (
        <div>
            <Link to='/dashboard/orders'><Button>Orders</Button></Link><br/><br/>
            <Outlet/>
            <div>
                {dishes.map((s, index) => (
                    <div key={index}>
                        <img src={s.dishImg} style={{height: 200, minWidth:300}} alt=''/>
                        <h4>Dish Name : {s.dishName}</h4>
                        <b>Price : ₹ {s.dishPrice}</b><br/>
                        <Button onClick={(e)=>Orderdish(e, s.dishId)}>Order Dish</Button>
                        <br/><br/>  
                    </div>
                ))}
            </div>
        </div>
    );
}