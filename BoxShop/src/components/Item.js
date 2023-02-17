import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {itemEvents} from './events';
import './Item.css';

export const Item = ({ name, url, price, size, id, v }) => {
  const [count, setCount] = useState(0);

  function AddToBasket() {
     itemEvents.emit('EEditClicked',v, id, count);
  }

  function decrease() {
    if (count)
      setCount(count - 1);
  }
  
  return (
    <tr>
      <td>
        <img className='Img' src={url}></img>
      </td>
      <td className='Info'>
        <NavLink to={"/" + id}>{name}</NavLink><br />
        Размер: {size}<br/>
        Стоимость: {price}<br/>
        <input className='Item-btn' type='button' value='Добавить' onClick={AddToBasket} /><br/>
        <input type='button' value='<' onClick={decrease} /> <input className='Item-btn-add' type='text' defaultValue={count} /> <input type='button' value='>' onClick={() => setCount(prevAge => prevAge+1)} />
      </td>
    </tr>
  );
};
