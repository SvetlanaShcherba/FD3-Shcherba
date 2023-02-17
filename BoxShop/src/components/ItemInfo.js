import React from 'react';

import './ItemInfo.css';

export const ItemInfo = ({ name, url, price, size, id }) => {
    return (
      <table className='ItemInfo'>
        <tbody>
          <tr>
            <td>
                <img className='Img' src={url}></img>
            </td>
            <td>
                {name}<br />
                Размер: {size}<br/>
                Стоимость: {price}<br/>
            {/*<input className='Item-btn' type='button' value='Добавить' />*/}
            </td>
        </tr> 
        </tbody>
           
      </table>
  );
};
