import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Filter.css';


export const Filter = ({cbShowFilteredItems, startItems}) => {
  const [listItems, setListItems] = useState(startItems);
  const [check, setCheck] = useState({
    isCheck: {
      /*1: false,
      2: false,
      3: false,*/
      '12*12': false,
      "12*15": false,
      "15*15": false,
      "18*18": false,
      "20*6": false,
      "20*10": false,
      "20*20": false,
      "30*20": false,
      "35*10": false,
      "15*15*15": false,
      "20*15*6": false,
      "35.5*27*5.5": false,
      
    },
  });

 useEffect(
    () => {
    cbShowFilteredItems(listItems);
   }, [listItems, check]);

 
  const updateFiltersFunc = (filter) =>   {
    setCheck((elem) => {
        return {
          isCheck: { ...elem.isCheck, [filter]: !elem.isCheck[filter] },
        };
      });
  }
    
  function showBtnClick() {
    let  newList= startItems.slice();
    let filter = check.isCheck;
    console.log(check.isCheck);
    if (filter) {
      let filterArr = Object.keys(filter).filter(key => filter[key] === true); //элементы массива - id тех чекбоксов, которые true
      newList = newList.filter(v => filterArr.includes(v.size));
      setListItems(newList);
    }
  }

  function reset() {
    setCheck({
      isCheck: {
        '12*12': false,
        "12*15": false,
        "15*15": false,
        "18*18": false,
        "20*6": false,
        "20*10": false,
        "20*20": false,
        "30*20": false,
        "35*10": false,
        "15*15*15": false,
        "20*15*6": false,
        "35.5*27*5.5": false,
      }
    }, [check]);
    setListItems(startItems);
  }

  return (
    <div   className="Filter">
      <div className='Filter-title'>Искать по параметрам:</div>
      <form>
        <div className='Filter-type'>
          {/*<span>Тип коробки:</span><br />
          <label><input type="checkbox" id="1" onChange={() => updateFiltersFunc(1)} checked={check.isCheck[1]}></input>Шляпные коробки</label><br />
          <label><input type="checkbox" id="2" onChange={() => updateFiltersFunc(2)} checked={check.isCheck[2]}></input>Самосборные коробки</label><br />
  <label><input type="checkbox" id="3" onChange={() => updateFiltersFunc(3)} checked={check.isCheck[3]}></input>Коробки-книги</label><br />*/}

          <span>Размер, см:</span><br />
          <label><input type="checkbox" id="12*12" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["12*12"]}></input>12*12</label><br />
          <label><input type="checkbox" id="12*15" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["12*15"]}></input>12*15</label><br />
          <label><input type="checkbox" id="15*15" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["15*15"]}></input>15*15</label><br />
          <label><input type="checkbox" id="18*18" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["18*18"]}></input>18*18</label><br />
          <label><input type="checkbox" id="20*6" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*6"]}></input>20*6</label><br />
          <label><input type="checkbox" id="20*10" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*10"]}></input>20*10</label><br />
          <label><input type="checkbox" id="20*20" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*20"]}></input>20*20</label><br />
          <label><input type="checkbox" id="30*20" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["30*20"]}></input>30*20</label><br />
          <label><input type="checkbox" id="35*10" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["35*10"]}></input>35*10</label><br />
          <label><input type="checkbox" id="15*15*15" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["15*15*15"]}></input>15*15*15</label><br />
          <label><input type="checkbox" id="20*15*6" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*15*6"]}></input>20*15*6</label><br />
          <label><input type="checkbox" id="35.5*27*5.5" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["35.5*27*5.5"]}></input>35.5*27*5.5</label><br />
        
          {/*<span>Крышка:</span><br />
          <label><input type="checkbox" id="16" onChange={() => updateFiltersFunc(16)} checked={check.isCheck[16]}></input>С крышкой</label><br />
          <label><input type="checkbox" id="17" onChange={() => updateFiltersFunc(17)} checked={check.isCheck[17]}></input>Без крышки</label><br />
        
          <span>Цвет:</span><br />
          <label><input type="checkbox" id="18" onChange={() => updateFiltersFunc(18)} checked={check.isCheck[18]}></input>Однотонные</label><br />
<label><input type="checkbox" id="19" onChange={() => updateFiltersFunc(19)} checked={check.isCheck[19]}></input>С принтом</label><br />*/}
        </div>
      </form>

      <NavLink to={"/filter"}><input className='Filter-btn' type='button' value='Показать' onClick={showBtnClick} /></NavLink><br />
      <NavLink to={"/"}><input className='Filter-btn' type='button' value='Сброс' onClick={reset} /></NavLink><br />
      
    </div>
      
    );

};