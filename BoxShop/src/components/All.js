import React, {useState} from 'react';

import { Item } from '../components/Item';

export const All = ({ startItems, filter }) => {
  const [listItems, setListItems] = useState(startItems);

    let newList = startItems.slice();
    if (filter)
        console.log(filter);

    const code= newList.map(v =>
    <Item
      item={v}
      key={v.code}
      price={v.price}
      url={v.url}
      name={v.name}
      size={v.size}
      id={v.code}
    />
  ); 
     
          
    return (
      <table className='Items'>
          <tbody>{code}</tbody>
      </table>
    );
};
