const HandleSubmit = (formControls) => {
    let formData = {};
    const touched = {};
    const updatedControls = { ...formControls }; 
    let updatedFormElement = { };

    for (let formElementId in formControls) 
    {
        touched[formElementId] = formControls[formElementId].touched;
        formData[formElementId] = formControls[formElementId].value; // in formData{} stores only values of each datas
    }

    const delselect =  Object.keys(touched).filter((f) => touched[f] === false); 

    if(delselect.length !== 0){
        for(let object in delselect ){

            updatedFormElement = { ...updatedControls[delselect[object]] };
            updatedFormElement.errorMsg = `Oops you missed ${delselect[object]} !! `
            updatedControls[delselect[object]] = updatedFormElement;
        }
    }
    formData = {...formData , id : Date.now()}
    
    return{
            updatedControls: updatedControls,
            formData: formData
        }
}

export default HandleSubmit;