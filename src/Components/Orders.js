import React, {useContext} from 'react';
import {Datas} from './Context';
import {Link} from 'react-router-dom'; 
import {Button} from 'react-bootstrap';

export default function Orders(){
    const {orders, status} = useContext(Datas);
    return(
        <div>
            <Link to='/dashboard'><Button>Menu</Button></Link><br/><br/>
           
            <div>
                {orders.length ? orders.map((e, index) => (
                    <div key={index}>
                        <img src={e.dishImg} alt='' style={{height: 50, minWidth:50}}/>
                        <p>{index+1}. {e.dishName}</p>
                       Status :  <b>{status}</b>
                        <br/><br/>  
                    </div>
                ))
                : ' Nothing Else Is Here' }
                
            </div>
            
        </div>
    );
}