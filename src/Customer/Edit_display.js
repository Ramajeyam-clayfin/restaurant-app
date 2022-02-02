import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {ListGroup, Form, Button} from 'react-bootstrap';
import './edit.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Editdisplay(){
    const {dishes, setShow, select, setSelect,view, setView} = useContext(Datas);
    const showHide = view ? "edit display-block" : "edit display-none";

    const Checkbox = (e,index) => {
        let chks = e.target.checked

        if (chks) //when checkbox is checked
        {
            const values = [ ...select, index];
            setSelect(values); //insert the index of the dishes array 
        }
        else //when checkbox is unchecked
        { 
            const delselect = select.filter((f) => f !== index); 
            setSelect([...delselect]); //removes the inserted value if checkbox is unchecked
        }
       
    }

    const Display = () => {

        setShow();
        let updateShow = [];

        for(let i=0; i < select.length; i++)
        {
            let index = select[i]+1;
            let push = dishes.find( ({dishId}) => dishId === index );
            updateShow = [...updateShow, push ];
              
        }
        setShow(updateShow);
        setView(false);
    }

    return(
        <div className={showHide}>
            Select Dishes to show in Display page<br/><br/>
            <Form >
            {dishes.map((s, index) => (
                    
                    <div key={index}>
                        <ListGroup as="ol" style={{width:500, margin:'auto'}} >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                    <div style={{textAlign:'start'}}>
                                        <b>{index+1}</b> . {s.dishName}
                                    </div>
                                </div>
                                <input
                                type="checkbox"
                                id='INPUT'
                                name={s.dishName}
                                value={s.dishId}
                                onChange={(e)=>Checkbox(e,index)}
                                />
                            </ListGroup.Item>
                            <br/>
                        </ListGroup>
                    </div> 
                ))}
                <Button onClick={()=> Display()}>Display</Button>
                </Form>
        </div>
    );
}