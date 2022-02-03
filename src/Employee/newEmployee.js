import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Addemployee(){
    const {values, setValues, emp, setEmp} = useContext(Datas);

    const Submitform=(event)=>{
        event.preventDefault();

        if(Object.keys(values).length === 0){
            alert(`Form should not be empty..`); 
        }
        else{
            const push = [ ...emp, values];
            setEmp(push);
            document.querySelector("Form").reset();
            alert(`Employee is added`);  
        }
    }

    return(
        <div>
            <Form onSubmit={Submitform}>
                {/* Name */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Name :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="text" required  placeholder="Name" name="Name" onChange={(e) =>
                            setValues(values => ({ ...values, empName: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Employye ID */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Employee ID :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="number" placeholder="ID" name="id"   onChange={(e) =>
                            setValues(values => ({ ...values, empId: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Position */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Position :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Select placeholder="Choose..." name="Position" onChange={(e) =>
                            setValues(values => ({ ...values, empPosition: e.target.value }) ) }>
                        <option>Choose...</option>
                        <option value='Waiter'>Waiter</option>
                        <option value='Chef'>Chef</option>
                        <option value='Cashier'>Cashier</option>
                        <option value='Cook'>Cook</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                {/* Branch */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Branch :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Select placeholder="Choose..." name="Branch" onChange={(e) =>
                            setValues(values => ({ ...values, branch: e.target.value }) ) }>
                        <option>Choose...</option>
                        <option value='Chennai'>Chennai</option>
                        <option value='Salem'>Salem</option>
                        <option value='Pondicherry'>Pondicherry</option>
                        <option value='Coimbatore'>coimbatore</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                {/* Joining date */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    joining Date :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="date" placeholder="Joining Date" name="Joindate" onChange={(e) =>
                            setValues(values => ({ ...values, empJoindate: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Salary */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Salary :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="number" placeholder="Salary" name="Salary" onChange={(e) =>
                            setValues(values => ({ ...values, empSalary: e.target.value }) ) } />
                    </Col>
                </Form.Group>

                {/* Gender */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Gender :
                    </Form.Label>
                    <Col sm={1}>
                        <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        value='Male'
                        onChange={(e) =>
                            setValues(values => ({ ...values, empGender:  e.target.value }) ) }
                        />
                        <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        value='Female'
                        onChange={(e) =>
                            setValues(values => ({ ...values, empGender:  e.target.value }) ) }
                        />
                    </Col>
                </Form.Group>

                {/* D.O.B */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Date Of Birth :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="date" placeholder="D.O.B" name="dob" onChange={(e) =>
                            setValues(values => ({ ...values, empDob: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Mobile */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Mobile Number :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="number" placeholder="Mobile " name="mob" onChange={(e) =>
                            setValues(values => ({ ...values, empMob: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Email Id :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="mail" placeholder="Email ID" name="email" onChange={(e) =>
                            setValues(values => ({ ...values, empEmail: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Address1 */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label  column sm={3}>Address</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="1234 Main St"  name="address1" onChange={(e) =>
                            setValues(values => ({ ...values, Address1: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* Address2 */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label  column sm={3}>Address 2</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={(e) =>
                            setValues(values => ({ ...values, Address2: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* city */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>City :</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="City"  name="City" onChange={(e) =>
                            setValues(values => ({ ...values, City: e.target.value }) ) }/>
                    </Col>
                </Form.Group>

                {/* State */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>State :</Form.Label>
                    <Col sm={5}>
                    <Form.Select placeholder="Choose..." name="state" onChange={(e) =>
                            setValues(values => ({ ...values, State: e.target.value }) ) }>
                        <option >Choose...</option>
                        <option value='Tamil nadu' >Tamil Nadu</option>
                        <option value='Kerala' >Kerala</option>
                        <option value='Pondicherry' >Pondicherry</option>
                        <option value='Karanataka' >Karnataka</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                {/* Zipcode */}
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={3}>Zip Code :</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Zip code" name="zipcode" onChange={(e) =>
                            setValues(values => ({ ...values, Zipcode: e.target.value }) ) } />
                    </Col>
                </Form.Group>
               
                {/* Submit */}
                <Button variant="primary" type='submit'  >
                    Submit
                </Button>
            </Form>
            <br/><br/>
        </div>
    );
}