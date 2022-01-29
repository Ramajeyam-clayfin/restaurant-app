import React, {createContext, useState} from 'react';
import pizza from '../Images/pizza.jpg';
import dosa from '../Images/dosa.jpg';
import idly from '../Images/idly.jpg';
import samosa from '../Images/samosa.jpg';
import lemon_juice from '../Images/lemon-juice.jpg';
import noodles from '../Images/noodles.jpg';

export const Datas = createContext();

export const DataProvider = (props) =>{
    const [dishes, setDishes] = useState([ {
        dishName : 'Masala Dosa',
        dishImg : dosa,
        dishPrice: 10,
    }, 
    {
        dishName : 'Idly',
        dishImg : idly,
        dishPrice: 10,
    }, 
    {
        dishName : 'Samosa',
        dishImg : samosa,
        dishPrice: 10,
    }, 
    {
        dishName : 'Lemon Juice With Red Berries',
        dishImg : lemon_juice,
        dishPrice: 10,
    }, 
    {
        dishName : 'Stir Fry Noodles',
        dishImg : noodles,
        dishPrice: 10,
    }, 
    {
        dishName : 'Pizza',
        dishImg : pizza,
        dishPrice: 10,
     },
    ]);

    return(
         <div>
            <Datas.Provider value={{dishes, setDishes}} >
                {props.children}
            </Datas.Provider>
         </div>
     );
}

export const DataConsumer = Datas.Consumer;
