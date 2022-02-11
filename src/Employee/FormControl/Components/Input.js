import React from 'react';
import './formStyle.css';
import { Form, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = (props) => {
  let formControl = "form-control";

  if (props.values.touched && !props.values.valid) {
      formControl = 'form-control control-error';
  }
	return (  
        <div>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} htmlFor={props.values.name} style={{textAlign:"end"}}>
                {props.values.title}
                </Form.Label>
                <Col sm={7}>
                    <Form.Control
                        className={formControl}
                        id={props.values.name}
                        value={props.values.value}
                        type={props.values.type}
                        placeholder={props.values.placeholder}
                        name={props.values.name}
                        onChange={props.handleChange}
                        isInvalid={ !!props.values.errorMsg}
                        isValid={props.values.touched && !props.values.errorMsg}
                    />
                    <Form.Control.Feedback type='invalid' >{ props.values.errorMsg }</Form.Control.Feedback>
                    
                </Col>
            </Form.Group>
              
        </div>
    )
}

export default Input;

