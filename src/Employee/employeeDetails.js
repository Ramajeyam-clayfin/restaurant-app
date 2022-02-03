import React, {useContext} from 'react';
import {Datas} from '../Components/Context';
import {Table} from 'react-bootstrap';


export default function Empdetails(){
    const {emp} = useContext(Datas);

    return(
        <div>
            {emp.length ? emp.map((e, index) => (
                <Table striped bordered responsive>
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
                    <tbody key={index}>
                        <tr >
                            <td>{index+1}.</td>
                            <td>{e.empId}</td>
                            <td>{e.empName}</td>
                            <td>{e.empPosition}</td>    
                            <td>{e.empJoindate}</td>
                            <td>{e.empSalary}</td>
                            <td>{e.empGender}</td>
                            <td>{e.empDob}</td>
                            <td>{e.branch}</td>
                            <td>{e.empMob}</td>
                            <td>{e.empEmail}</td>
                            <td>{e.Address1}</td>
                            <td>{e.Address2}</td>
                            <td>{e.City}</td>
                            <td>{e.State}</td>
                            <td>{e.Zipcode}</td>
                        </tr>
                    </tbody>
                </Table>
            ))
            : <div><h3>No Data to Display..!</h3></div>  
            } 
        </div>
    );
}