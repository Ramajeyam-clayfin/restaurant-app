import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Stockmanage (){
    const {stocks, setStocks} = useContext(Datas);

    const Additem = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        let values = {};

        if(name === 'item')
        {
            values = { ...values, itemName: value};
            console.log(values);
        }
        else if(name === 'quantity')
        {
            values = { ...values, quantity: value};
        }
        else if(name === 'unit')
        {
            values = { ...values, unit: value};
        }
        console.log(values);
        const push = [ ...stocks, values];
        console.log(push);
        setStocks(push);
        document.querySelector("Form").reset();
    }

    return(
        <div>
            Stock mangement
            <span>
                <Form onSubmit={Additem}>
                    <Form.Group as={Row}   className="mb-3" >
                        <Form.Label column sm={1}>
                        Item Name :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" required  placeholder="Item Name" name="item" />
                        </Col>
                        <Form.Label column sm={1}>
                        Quantity :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control type="number" required  placeholder="Quantity" name="quantity" />
                        </Col>
                        <Form.Label column sm={1}>
                        Unit :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Select placeholder="Choose..." name="unit" >
                            <option >Choose...</option>
                            <option value='Kg' >Kilo Gram</option>
                            <option value='Lt' >Liters</option>
                        </Form.Select>
                        </Col>
                        <Col>
                            <Button variant="primary" type='submit'>Add Item</Button>
                        </Col>  
                    </Form.Group> 
                </Form>
            </span>
            <div>
                {stocks.map((s, index)=>(
                    <div key={index}>
                        {s.itemName}
                        {s.quantity}
                        In {s.unit}
                    </div>
                ))}
            </div>
        </div>
    );
}