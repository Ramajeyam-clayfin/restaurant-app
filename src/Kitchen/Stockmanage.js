import React, {useContext, useState} from 'react';
import {Datas} from '../Components/Context';
import {Form, Col, Row, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './add.css';

export default function Stockmanage (){
    const {stocks, setStocks, add, setAdd} = useContext(Datas);
    const [values, setValues] = useState({});
    const showHide = add ? "edit display-block" : "edit display-none";
    const Hideshow = add ?  "edit display-none" : "edit display-block";
   

    const Additem = (event) => {
        event.preventDefault();

        setValues(values => ({ ...values   }) );
        const push = [ ...stocks, values];
        setStocks(push);
        document.querySelector("Form").reset();
        setAdd(false);
    }
    
    let addqty = (id) => {

        const newArr = stocks.map((obj) => {
          if (obj.id === id) {
            obj = { quantity: obj.quantity++, ...obj }; 
          }
          return obj;
        });
        setStocks(newArr);  
      };

      let Subqty = (id) => {
        const newArr = stocks.map((obj) => {
          if (obj.id === id) {
              if(obj.quantity === 0)
              {
                alert(`quantity can't be less than zero`);
              }
              else{
                obj = { quantity: obj.quantity--, ...obj };
              }
          }
          return obj;
        });
        setStocks(newArr);
      };

    const handleDelete = (id) => {
        const delnotes = stocks.filter((to) => to.id !== id); 
        setStocks([...delnotes]); 
      };

    return(
        <div>
            <Button onClick={()=>setAdd(true)} className={Hideshow} style={{float:'right', marginRight:20}}>Add Item</Button>
            <br/><br/>
            <span className={showHide}>
                <Form onSubmit={Additem}>
                    <Form.Group as={Row}   className="mb-3" >
                        <Form.Label column sm={1}>
                        Item Name :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control type="text" required  placeholder="Item Name" name="item" onChange={(e) =>
                            setValues(values => ({ ...values, itemName: e.target.value, id: `${e.target.value}-${Date.now()}`, no: 0 , read:true }) ) }/>
                        </Col>
                        <Form.Label column sm={1}>
                        Quantity :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Control type="number" required  placeholder="Quantity" name="quantity" onChange={(e) =>
                            setValues(values => ({ ...values, quantity: e.target.value }) ) } />
                        </Col>
                        <Form.Label column sm={1}>
                        Unit :
                        </Form.Label>
                        <Col sm={2}>
                        <Form.Select placeholder="Choose..." name="unit" onChange={(e) =>
                            setValues(values => ({ ...values, unit: e.target.value }) ) }>
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
                {stocks.length ? stocks.map((s, index)=>(
                    <div key={index}>
                        <ListGroup as="ol" style={{width:600, margin:'auto'}} >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                    <div style={{textAlign:'start'}}>
                                        <b>{index+1}</b> . {s.itemName} &nbsp;&nbsp;
                                        {s.quantity} &nbsp;&nbsp; {s.unit} 
                                    </div>
                                </div>Qty &nbsp;&nbsp;
                                <Button onClick={()=>addqty(s.id)}>+</Button>&nbsp;&nbsp;
                                <Button onClick={()=>Subqty(s.id)} >-</Button>&nbsp;&nbsp;
                                <Button onClick={()=>handleDelete(s.id)}>Delete</Button>
                            </ListGroup.Item>
                            <br/>
                        </ListGroup>
                       
                    </div>
                ))
                : <div><br/><br/><h3>Add Stock to Display...</h3></div>
            }
            </div>
        </div>
    );
}