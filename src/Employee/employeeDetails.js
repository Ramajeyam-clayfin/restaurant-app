import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Table} from 'react-bootstrap';


export default function Empdetails(){
    const {emp} = useContext(Datas);
    const empty = 'No Data to Display..!';

    return(
        <div>
            <Table striped bordered responsive >
                    <thead >
                        <tr >
                            <th>S.No</th>
                            <th>Id.</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Join Date</th>
                            <th>Salary</th>
                            <th>Gender</th>
                            <th>D.O.B</th>
                            <th>Branch</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address 1</th>
                            <th>Address 2</th>
                            <th>City</th>
                            <th>State</th>
                            <th>ZipCode</th>
                        </tr>
                    </thead>
                    <tbody >
                    <React.Fragment>
                    { emp.length ? emp.map((e, index) => (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td>{e.empid}</td>
                            <td>{e.name}</td>
                            <td>{e.position}</td>    
                            <td>{e.joindate}</td>
                            <td>{e.salary}</td>
                            <td>{e.gender}</td>
                            <td>{e.dob}</td>
                            <td>{e.branch}</td>
                            <td>{e.mobile}</td>
                            <td>{e.email}</td>
                            <td>{e.line1}</td>
                            <td>{e.line2}</td>
                            <td>{e.city}</td>
                            <td>{e.state}</td>
                            <td>{e.zipcode}</td>
                        </tr>
                    
                
            ))
            : <>{empty}</>  
            } 
            </React.Fragment>
            </tbody>
            </Table>
        </div>
    );
}