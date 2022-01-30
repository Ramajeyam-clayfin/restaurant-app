import React, {useContext} from 'react';
import {Datas} from './Context';
import {Link} from 'react-router-dom'; 
import {Button} from 'react-bootstrap';

export default function Orders(){
    const {orders} = useContext(Datas);
    return(
        <div>
            <Link to='/dashboard'><Button>Menu</Button></Link><br/><br/>
           
            <div>
                {orders.length ? orders.map((e, index) => (
                    <div key={index}>
                        {e.dishId}.&nbsp;&nbsp;
                        <img src={e.dishImg} style={{height: 50}} alt='' />
                        <p>Dish Name : {e.dishName}</p>
                        <br/><br/>  
                    </div>
                ))
                : ' Nothing Else Is Here' }
                
            </div>
            
        </div>
    );
}