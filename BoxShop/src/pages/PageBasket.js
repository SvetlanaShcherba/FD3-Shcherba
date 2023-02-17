import React, { useEffect } from 'react';
import {itemEvents} from '../components/events';


export const PageBasket = ({startItems}) => {
    let newList = startItems.slice();
    useEffect(
    () => {
            itemEvents.addListener('EEditClicked', addItems);
           
    },
    []
    );
    
    function addItems(item, code, count) {
        console.log(code);
    }
    
    return (
      <span>fdfgd</span>
    );
    
}