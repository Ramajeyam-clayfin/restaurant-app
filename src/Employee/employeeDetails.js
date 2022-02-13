import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Row, Col, FormLabel} from 'react-bootstrap';


export default function Empdetails(){
    const {emp} = useContext(Datas);

    return(
        <div>
            {emp.map((s, index) => (
                <Col>
                    <Row>
                        <FormLabel>Name : </FormLabel>
                        <FormLabel>{s.name}</FormLabel>
                    </Row>
                </Col>
            ))}
        </div>
    );
}