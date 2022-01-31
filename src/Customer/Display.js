import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {ListGroup, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Display(){
    const {dishes, show, setShow} = useContext(Datas);

    const Handlesubmit=( id)=>{

        if(show !== null)
        {
            if((show.map(a=>a.dishId)) !== id)
            {
                let push = dishes.find( ({dishId}) => dishId === id );
                const updateUsers = [
                    ...show,
                    {
                    dishId: push.dishId,
                    dishName: push.dishName,
                    dishImg: push.dishImg,
                    dishPrice: push.dishPrice,
                    status: push.status,
                    no: push.no,
                    }
                ];
                setShow(updateUsers);
            }
            else return ;
        }
        else {
            let push = dishes.find( ({dishId}) => dishId === id );
            const updateUsers = [
                ...show,
                {
                dishId: push.dishId,
                dishName: push.dishName,
                dishImg: push.dishImg,
                dishPrice: push.dishPrice,
                status: push.status,
                no: push.no,
                }
            ];
            setShow(updateUsers);  
        }
        console.log(show);
    }

    return(
        <div>
            Customer Display Page
            <Form >
            {dishes.map((s, index) => (
                    
                    <div key={index}>
                        <ListGroup as="ol" style={{width:500, margin:'auto'}} >
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                <div style={{textAlign:'start'}}><b>{index+1}</b> . {s.dishName}</div>
                                
                                </div>
                                <input
                                type="checkbox"
                                name={s.dishName}
                                value={s.dishId}
                                onClick={()=>Handlesubmit(s.dishId)}
                                />
                            </ListGroup.Item>
                            <br/>
                        </ListGroup>
                    </div> 
                ))}
                <Button>Display</Button>
                </Form>
                <div>
                    {show.map((t, index)=>(
                        <>
                        {t.dishId}. {t.dishName}<br/>
                        </>
                    ))}
                </div>
        </div>
    );
}