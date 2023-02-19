import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const PageBasket = () => {
  const item = useSelector(state => state.countItems);
  
   
    return (
      <table className='Items'>
        <tbody>
          <tr><td>Наименование</td>
            <td>Стоимость/шт</td>
            <td>Количество</td>
            <td>Общая стоимость</td></tr>
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.countItems}</td>
            <td>{(item.countItems)*parseInt(item.price)}</td>
          </tr>
        </tbody>
      </table>
    );
};

