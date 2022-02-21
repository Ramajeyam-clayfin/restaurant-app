// import  {useContext} from 'react';
// import {Datas} from '../Components/Context';
import  {actions} from './ActionTypes'

const initialState = {
    orders: [],
};
  
const OnlineOrdersreducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actions.ADD_ITEM :
        return { orders:  action.value };

        case actions.REMOVE_ITEM : 
        {
            const delitems = state.orders.filter( (Item) => Item.id !== action.value );
            return { orders: delitems };
        }

        case actions.ADD_QTY :  
        {
            const addQty = state.orders.map( (Item) => Item.id === action.value ? { quantity: Item.quantity++, ...Item } : Item  );
            return { orders: addQty };
        }

        case actions.SUB_QTY :  
        {
            const subQty = state.orders.map( (Item) => Item.id === action.value ? { quantity: Item.quantity--, ...Item } : Item  );
            return { orders: subQty };
        }

        default:
            return state;
    }
  };
  export default OnlineOrdersreducer;