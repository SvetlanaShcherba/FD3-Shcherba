import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { countItemsAdd, itemUpdate } from '../redux/countAC';
import { NavLink } from 'react-router-dom';

import './Item.css';

export const Item = ({ name, url, price, size, id, countInShop}) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [isDisabledBtnM, setDisabledBtnM] = useState(false);//Кнопка ">" заблокирована, если выбрано максимальное количество товара

  const itemRef = useRef(null);

  const dispatch = useDispatch();

  
  useEffect(() => {
      setCount(count);
  }, [count]);

  function AddToBasket() {
    if (count === 0)
      setError('Выберите количество и нажмите кнопку "Добавить"');
    else if (count > countInShop) {
      setError('Максимальное количество');
      setCount(countInShop);
      setDisabledBtnM(true);
    }
    else {
      itemRef.current.style.backgroundColor = ' rgb(171, 194, 125)';
      setError('Товар в корзине');
    }

    dispatch(countItemsAdd(count));
    dispatch(itemUpdate(name, price));
  }

  function decrease() {
    if (count)
      setCount(count - 1);
    if (count < countInShop) {
      setDisabledBtnM(false);
          }
    if (count === 1) {
      setDisabledBtnM(false);
      itemRef.current.style.backgroundColor = 'white';
      setError('');
    }
  }
  
  function btnMore() {
    setCount(prevAge => prevAge + 1);
    setError('');
    if (count === countInShop-1) {
      setDisabledBtnM(true);
      setError('Максимальное количество');
      setCount(countInShop);
    }
    else setDisabledBtnM(false);
  }
  

  return (
    <tr ref={itemRef} >
      <td>
        <img className='Img' src={url}></img>
      </td>
      <td className='Info'>
        <NavLink to={"/" + id}>{name}</NavLink><br />
        Размер: {size}<br/>
        Стоимость: {price}<br />
        <span className='ItemError'>{error}</span><br/>
        <input className='Item-btn' type='button' value='Добавить' onClick={AddToBasket} /><br/>
        <input type='button' value='<' onClick={decrease} />
        <input className='Item-btn-add' type='text' value={count} readOnly />
        <input type='button' value='>' disabled={isDisabledBtnM} onClick={btnMore} />
      </td>
    </tr>
  );
};
