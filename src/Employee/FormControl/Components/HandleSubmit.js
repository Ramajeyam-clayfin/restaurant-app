export const HandleSubmit = allInfo => {
    let formData = {};
    const touched = {};
    const updatedControls = { ...allInfo }; 
    let updatedFormElement = { };

    for (let formElementId in allInfo) 
    {
        touched[formElementId] = allInfo[formElementId].touched;
        formData[formElementId] = allInfo[formElementId].value; // in formData{} stores only values of each datas
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