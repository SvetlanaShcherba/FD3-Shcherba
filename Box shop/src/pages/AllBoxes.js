import React from 'react';

import { Item } from '../components/Item';
import './AllBoxes.css';

export const AllBoxes = ({startItems}) => {

  let newList = startItems.slice();

  const code= newList.map(v =>
      <Item
        key={v.code}
        price={v.price}
        url={v.url}
        name={v.name}
        size={v.size}
      />
  ); 
     
          
    return (
      <table className='Items'>
          <tbody>{code}</tbody>
      </table>
    );
};
