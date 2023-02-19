import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Filter.css';


export const Filter = ({cbShowFilteredItems, startItems}) => {
  const [listItems, setListItems] = useState(startItems);
  const [isDisabled, setDisabled] = useState(true);
  const [isSorted1, setSort1] = useState(false);
  const [isSorted2, setSort2] = useState(false);
  const [filterClass, setFilterClass] = useState('Filter');
  const [check, setCheck] = useState({
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
    },
  });

 let newList = startItems.slice();
   
  useEffect(
    () => {
    setSort1(isSorted1);
    }, [isSorted1]);
  
  useEffect(
      () => {
      cbShowFilteredItems(listItems);
  }, [listItems, check, isSorted1, isSorted2]);

  
  function updateFiltersFunc (filter) {
    setDisabled(false);
    setCheck((elem) => {
        return {
          isCheck: { ...elem.isCheck, [filter]: !elem.isCheck[filter] },
        };
      });
  }
    
  function showBtnClick() {
    let filter = check.isCheck;
    let filterV = Object.values(filter);
    if (filterV.some( v => v===true)) {
      let filterArr = Object.keys(filter).filter(key => filter[key] === true); //элементы массива - id тех чекбоксов, которые true
      newList = newList.filter(v => filterArr.includes(v.size));
      console.log(newList+"newList");
    }
    if (isSorted1) {
      newList=newList.sort((x, y) => parseInt(y.price) - parseInt(x.price));
    }
    if (isSorted2) {
      newList=newList.sort((x, y) => parseInt(x.price) - parseInt(y.price));
    }
    setListItems(newList);
    setFilterClass('Filter');
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
    setDisabled(true);
    setSort1(false);
    setSort2(false);
    setFilterClass('Filter');
  }

  function getFilterClass() {
    console.log("dsdfsd");
    setFilterClass('FilterMobile');
  }
  
  return (
    <div className={filterClass}>

      <a href='#' className={'fa fa-bars fa-2x'} onClick={getFilterClass}></a>

      <div className='Filter-title'>Сортировать:</div>
      <div className='Filter-price'>
        <label><input type="checkbox" onChange={() => {setSort1(!isSorted1); setDisabled(false) }} checked={isSorted1} disabled={isSorted2}></input>По убыванию цены</label><br />
        <label><input type="checkbox"  onChange={() => {setSort2(!isSorted2); setDisabled(false) }} checked={isSorted2} disabled={isSorted1}></input>По возрастанию цены</label><br />
      </div>

      <div className='Filter-title'>Искать по параметрам:</div>
      <div>
          <span>Размер, см:</span><br />
        <div  className='Filter-type'>
          <input type="checkbox" id="12*12" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["12*12"]}></input>12*12<br />
          <label><input type="checkbox" id="12*15" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["12*15"]}></input>12*15</label><br />
          <label><input type="checkbox" id="15*15" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["15*15"]}></input>15*15</label><br />
          <label><input type="checkbox" id="18*18" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["18*18"]}></input>18*18</label><br />
          <label><input type="checkbox" id="20*6" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*6"]}></input>20*6</label><br />
          <label><input type="checkbox" id="20*10" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*10"]}></input>20*10</label>
        </div>
        <div  className='Filter-type'>
          <label><input type="checkbox" id="20*20" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*20"]}></input>20*20</label><br />
          <label><input type="checkbox" id="30*20" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["30*20"]}></input>30*20</label><br />
          <label><input type="checkbox" id="35*10" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["35*10"]}></input>35*10</label><br />
          <label><input type="checkbox" id="15*15*15" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["15*15*15"]}></input>15*15*15</label><br />
          <label><input type="checkbox" id="20*15*6" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["20*15*6"]}></input>20*15*6</label><br />
          <label><input type="checkbox" id="35.5*27*5.5" onChange={(eo) => updateFiltersFunc(eo.target.id)} checked={check.isCheck["35.5*27*5.5"]}></input>35.5*27*5.5</label><br />
        </div>  
      </div>
      

      <NavLink to={"/filter"}><input className={(isDisabled) ? "filter-btn-disabled" : 'Filter-btn'} type='button' value='Показать' onClick={showBtnClick} disabled={isDisabled}/></NavLink>
      <NavLink to={"/"}><input className='Filter-btn' type='button' value='Сброс' onClick={reset} /></NavLink><br />
      
    </div>
      
    );

};

