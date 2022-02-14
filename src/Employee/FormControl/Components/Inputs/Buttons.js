import { Button } from 'react-bootstrap';

export const Buttons = props => {
    return(
        <Button 
            style= {props.style} 
            className = {props.type==='primary'? 'btn btn-primary' : 'btn btn-secondary'}
            onClick= {props.action}  
        >

        {props.title}

        </Button>
    );
}