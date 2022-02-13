import React, { Component }  from "react";
import {Datas} from '../../Components/Context'; 
import {initialState} from './Components/metaData';
import ChangeHandler from './Components/changeHandler';
import HandleSubmit from './Components/HandleSubmit';
import Input from './Components/Input';
import Dropdown from './Components/Dropdown';
import Radio from './Components/Radio';
import Buttong from './Components/Button';

export default class FormControl extends Component {

    static contextType = Datas

    constructor(props){
        super(props);
        
        this.state = {

            formIsValid: false,
            formControls : initialState
        }
    }
    

    handleChange = (event) => {
        let change = ChangeHandler(event, this.state.formControls);

        this.setState(
            {
                formControls: change.updatedControls, 
                formIsValid: change.formIsValid
            }
        );
 
    }

    formSubmitHandler = () => {

        const context = this.context
        let formControlsid = this.state.formControls.empid;
        let submit = HandleSubmit(this.state.formControls);
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
                formControls: update
            }
        );  
        
        
        
        if(delselect.length === 0 && id.length === 0) {
            

            const push = [ ...context.emp, value ];
            context.setEmp(push);
            alert(`Employee is added`);

            this.setState(
                {
                    formControls: initialState,
                    formIsValid: false
                }
            );
        }
        
    }


    render() {
        return(
            <div>
                {/* Name Field */}
                <Input handleChange={this.handleChange} values={this.state.formControls.name} /> 

                <Input handleChange={this.handleChange} values={this.state.formControls.empid} />

                <Dropdown handleChange={this.handleChange} values={this.state.formControls.position} /> 

                <Dropdown handleChange={this.handleChange} values={this.state.formControls.branch} /> 

                <Input handleChange={this.handleChange} values={this.state.formControls.joindate} /> 

                <Input handleChange={this.handleChange} values={this.state.formControls.salary} /> 

                <Radio handleChange={this.handleChange} values={this.state.formControls.gender} /> 

                <Input handleChange={this.handleChange} values={this.state.formControls.dob} /> 

                <Input handleChange={this.handleChange} values={this.state.formControls.email} />

                <Input handleChange={this.handleChange} values={this.state.formControls.mobile} />

                <Input handleChange={this.handleChange} values={this.state.formControls.line1} />

                <Input handleChange={this.handleChange} values={this.state.formControls.line2} />

                <Input handleChange={this.handleChange} values={this.state.formControls.city} />

                <Dropdown handleChange={this.handleChange} values={this.state.formControls.state} />

                <Input handleChange={this.handleChange} values={this.state.formControls.zipcode} />

                <Dropdown handleChange={this.handleChange} values={this.state.formControls.country} /> <br/>
                { /*Submit */ }
                <Buttong 
                    action = {this.formSubmitHandler}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={buttonStyle}
                    disabled={! this.state.formIsValid}
                /> 
                
                
            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }