import React from 'react';
import {useParams} from "react-router-dom";

import { ItemInfo } from '../components/ItemInfo';

export const PageItem = ({startItems}) => {
    let newList = startItems.slice();
    const params = useParams();
  console.log(params);
    const itemId = parseInt(params.code);
    let itemData=newList.filter( i => i.code===itemId );
    itemData = itemData[0];
    
    return (
      <ItemInfo name={itemData.name} price={itemData.price} url={itemData.url}  id={itemData.code} size={itemData.size}/>
    );
    
}