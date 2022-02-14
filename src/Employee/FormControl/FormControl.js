import React, {Component} from 'react';
import {initialState} from './Components/metaData';
import {ChangeHandler} from './Components/ChangeHandler';
import {HandleSubmit} from './Components/HandleSubmit';
import {Input} from './Components/Inputs/Input';
import {Dropdown} from './Components/Inputs/Dropdown';
import {Radio} from './Components/Inputs/Radio';
import {Buttons} from './Components/Inputs/Buttons';
import {Datas} from '../../Components/Context';


export default class FormControl extends Component {
    static contextType = Datas

    constructor(props){
        super(props);
        this.state = {

            Valid: false,
            allInfo: initialState
        }
    }

    handleChange = event => {
        let change = ChangeHandler(event, this.state.allInfo);

        this.setState(
            {
                allInfo: change.updatedControls, 
                Valid: change.formIsValid
            }
        );
    }

    formSubmitHandler = () => {

        const context = this.context
        let formControlsid = this.state.allInfo.empid;
        let submit = HandleSubmit(this.state.allInfo);
        let value = submit.formData;
        let update = submit.updatedControls;
        
        const delselect =  Object.keys(value).filter((f) => value[f] === ''); 
        let id = context.emp.filter((e) => e.empid === value.empid)

        if(id.length !== 0){
            for(let object in update ){
                if(object === 'empid'){
                    formControlsid.errorMsg = `Employee ID Should be Unique !! `;
                    formControlsid.value = '';
                    update[object] = formControlsid;
                }
            }
        }

        this.setState(
            {
                allInfo: update
            }
        );  
        
        
        
        if(delselect.length === 0 && id.length === 0) {
            
            const push = [ ...context.emp, value ];
            context.setEmp(push);
            alert(`Employee is added`);

            this.setState(
                {
                    allInfo: initialState,
                    Valid: false
                }
            );
        }
        
    }


    render() {
        return (
            <div>
                <Input handleChange={this.handleChange} values={this.state.allInfo.name} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.empid} />

                <Dropdown handleChange={this.handleChange} values={this.state.allInfo.position} />

                <Dropdown handleChange={this.handleChange} values={this.state.allInfo.branch} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.joindate} /> 

                <Input handleChange={this.handleChange} values={this.state.allInfo.salary} />

                <Radio handleChange={this.handleChange} values={this.state.allInfo.gender} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.dob} /> 

                <Input handleChange={this.handleChange} values={this.state.allInfo.email} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.mobile} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.line1} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.line2} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.city} />

                <Dropdown handleChange={this.handleChange} values={this.state.allInfo.state} />

                <Input handleChange={this.handleChange} values={this.state.allInfo.zipcode} />

                <Dropdown handleChange={this.handleChange} values={this.state.allInfo.country} /> <br/>

                <Buttons 
                    action = {this.formSubmitHandler}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={{margin : '10px 10px 10px 10px'}}
                /> 

            </div>
        );
    }
}