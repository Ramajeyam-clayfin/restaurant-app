import React from 'react';
import FormControl from './FormControl/FormControl';
import {Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Addemployee(){


    return(
        <div>
            <Form >
                <FormControl/>
            </Form>
            <br/><br/>
        </div>
    );
}