import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Addemployee(){
    const {values, setValues, emp, setEmp} = useContext(Datas);

    const Addvalue=(event)=>{
        event.preventDefault();
        const {name, value} = event.target
        
        if(name === 'Name')
        {
            setValues({ ...values, empName: value});
        }
        else if(name === 'id')
        {
            setValues({ ...values, empId: value });
        }
        else if(name === 'Position')
        {
            setValues ({ ...values, empPosition: value });
        }
        else if(name === 'Branch')
        {
            setValues({ ...values, branch: value });
        }
        else if(name === 'Joindate')
        {
            setValues({ ...values, empJoindate: value });
        }
        else if(name === 'Salary')
        {
            setValues({ ...values, empSalary: value });
        }
        else if(name === 'gender')
        {
            setValues({ ...values, empGender: value });
        }
        else if(name === 'dob')
        {
            setValues ({ ...values, empDob: value });
        }
        else if(name === 'mob')
        {
            setValues ({ ...values, empMob: value });
        }
        else if(name === 'email')
        {
            setValues({ ...values, empEmail: value });
        }
        else if(name === 'address1')
        {
            setValues({ ...values, Address1: value });
        }
        else if(name === 'address2')
        {
            setValues({ ...values, Address2: value });
        }
        else if(name === 'City')
        {
            setValues({ ...values, City: value });
        }
        else if(name === 'state')
        {
            setValues({ ...values, State: value });
        }
        else if(name === 'zipcode')
        {
            setValues ({ ...values, Zipcode: value });
        }
        
    }

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
                    <Form.Control type="text" required  placeholder="Name" name="Name" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Employye ID */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Employee ID :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="number" placeholder="ID" name="id"  onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Position */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Position :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Select placeholder="Choose..." name="Position" onChange={(e)=>Addvalue(e)}>
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
                    <Form.Select placeholder="Choose..." name="Branch" onChange={(e)=>Addvalue(e)}>
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
                    <Form.Control type="date" placeholder="Joining Date" name="Joindate" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Salary */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Salary :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="number" placeholder="Salary" name="Salary" onChange={(e)=>Addvalue(e)} />
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
                        onChange={(e)=>Addvalue(e)}
                        />
                        <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        value='Female'
                        onChange={(e)=>Addvalue(e)}
                        />
                    </Col>
                </Form.Group>

                {/* D.O.B */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Date Of Birth :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="date" placeholder="D.O.B" name="dob" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Mobile */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Mobile Number :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="number" placeholder="Mobile " name="mob" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>
                    Email Id :
                    </Form.Label>
                    <Col sm={5}>
                    <Form.Control type="mail" placeholder="Email ID" name="email" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Address1 */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label  column sm={3}>Address</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="1234 Main St"  name="address1" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* Address2 */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label  column sm={3}>Address 2</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* city */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>City :</Form.Label>
                    <Col sm={5}>
                    <Form.Control placeholder="City"  name="City" onChange={(e)=>Addvalue(e)}/>
                    </Col>
                </Form.Group>

                {/* State */}
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={3}>State :</Form.Label>
                    <Col sm={5}>
                    <Form.Select placeholder="Choose..." name="state" onChange={(e)=>Addvalue(e)}>
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
                    <Form.Control placeholder="Zip code" name="zipcode" onChange={(e)=>Addvalue(e)} />
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