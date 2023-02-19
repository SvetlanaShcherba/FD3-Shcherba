import React from 'react';

import './ItemInfo.css';

export const ItemInfo = ({ name, url, price, size, id, count }) => {
    return (
      <div  className='ItemInfo'>
        <div >
          <img className='Img' src={url}></img>
        </div>

        <div>
          <div>
            {name}<br />
            Размер: {size}<br/>
            Стоимость: {price}<br />
            В наличии: {count}шт.
          </div>
            
        </div>
      </div>
    );
};
