import React, { Component }  from "react";

import {initialState} from './Components/metaData';
import ChangeHandler from './Components/changeHandler';
import HandleSubmit from './Components/HandleSubmit';
import Input from './Components/Input';
import Textarea from './Components/Textarea';
import Dropdown from './Components/Dropdown';
// import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';
import Buttong from './Components/Button';

export default class FormControl extends Component {

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

        let submit = HandleSubmit(this.state.formControls);

        this.setState(
            {
                formControls: submit.updatedControls
            }
        );  
    }

    handleClearForm = () => {

      this.setState(
        {
            formControls: initialState,
            formIsValid: false
        }
      );
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

                <Textarea handleChange={this.handleChange} values={this.state.formControls.about} />

                <Buttong 
                    action = {this.formSubmitHandler}
                    type = {'primary'} 
                    title = {'Submit'} 
                    style={buttonStyle}
                    disabled={! this.state.formIsValid}
                /> { /*Submit */ }
                
                <Buttong
                    action = {this.handleClearForm}
                    type = {'secondary'}
                    title = {'Clear'}
                    style={buttonStyle}
                /> {/* Clear the form */}
            </div>
        );
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
  }