import React from 'react';
// import {Datas} from '../Components/Context';
import FormControl from './FormControl/FormControl';
import {Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Addemployee(){
    // const {values, setValues, emp, setEmp} = useContext(Datas);

    // const Submitform=(event)=>{
    //     event.preventDefault();

    //     if(Object.keys(values).length === 0){
    //         alert(`Form should not be empty..`); 
    //     }
    //     else{
    //         const push = [ ...emp, values];
    //         setEmp(push);
    //         document.querySelector("Form").reset();
    //         alert(`Employee is added`);  
    //     }
    // }

    return(
        <div>
            <Form >
                <FormControl/>
            </Form>
            <br/><br/>
        </div>
    );
}