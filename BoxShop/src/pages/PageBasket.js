import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const PageBasket = () => {
  const item = useSelector(state => state.countItems);
  

  let sum = ((item.countItems) * parseInt(item.price)) ? ((item.countItems) * parseInt(item.price)) : 0;
   
    return (
      <table className='Items'>
        <tbody>
          <tr><td>Наименование</td>
            <td>Стоимость</td>
            <td>Количество</td>
            <td>Сумма</td></tr>
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.countItems}</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </table>
    );
};

