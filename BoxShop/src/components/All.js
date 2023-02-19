import React from 'react';

import { Item } from '../components/Item';

export const All = ({listItems}) => {

  const code= listItems.map(v =>
    <Item
      item={v}
      key={v.code}
      price={v.price}
      url={v.url}
      name={v.name}
      size={v.size}
      id={v.code}
      countInShop={v.count}
    />
  ); 
     
          
    return (
      <table className='Items'>
          <tbody>{code}</tbody>
      </table>
    );
};
