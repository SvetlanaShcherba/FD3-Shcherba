
import { COUNT_ADD, ITEM_UPDATE } from './countAC';
const initState = {
  countItems: 0, 
  name: "",
  price: "", 
}

function countItemsReducer(state=initState,action) {
  switch (action.type) {

    case COUNT_ADD: {
      let newState={...state,
        countItems: state.countItems+action.amount,
      };
      return newState;
    }
      
    case ITEM_UPDATE: {
      let newState={...state,
        name: action.name,
        price: action.price,
      };
      return newState;
    }

    default:
      return state;
  }
}

export default countItemsReducer;