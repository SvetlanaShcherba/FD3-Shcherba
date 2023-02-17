import React from 'react';
import './Item.css';

export const Item = ({ name, url, price, size }) => {
  return (
    <tr>
      <td>
        <img className='Img' src={url}></img>
      </td>
      <td className='Info'>
        {name}<br />
        Размер: {size}<br/>
        Стоимость: {price}<br/>
        <input className='Item-btn' type='button' value='Добавить' />
      </td>
    </tr>
  );
};
