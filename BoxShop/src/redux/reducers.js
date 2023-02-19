import { combineReducers } from 'redux';

import countItemsReducer from "./countItemsReducer";

let combinedReducer=combineReducers({
    countItems: countItemsReducer,   
});

export default combinedReducer;