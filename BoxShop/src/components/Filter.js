import React,  { useState, useEffect}  from 'react';
import './Filter.css';


export const Filter = ({cbShowFilteredItems}) => {
  const [a, setA] = useState(false);
  const [check, setCheck] = useState({
    isCheck: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
    },
  });

 useEffect(
    () => {
    cbShowFilteredItems(check.isCheck);
   }, [a]);

 
  const updateFiltersFunc = (filter) =>   {
    setCheck((elem) => {
        return {
          isCheck: { ...elem.isCheck, [filter]: !elem.isCheck[filter] },
        };
      });
  }
    
  function f() {
    setA(check);
  }

  return (
    <div   className="Filter">
      <div className='Filter-title'>Искать по параметрам:</div>
      <form>
        <div className='Filter-type'>
          <span>Тип коробки:</span><br />
          <label><input type="checkbox" id="1" onChange={() => updateFiltersFunc(1)} checked={check.isCheck[1]}></input>Шляпные коробки</label><br />
          <label><input type="checkbox" id="2" onChange={() => updateFiltersFunc(2)} checked={check.isCheck[2]}></input>Самосборные коробки</label><br />
          <label><input type="checkbox" id="3" onChange={() => updateFiltersFunc(3)} checked={check.isCheck[3]}></input>Коробки-книги</label><br />

          <span>Размер, см:</span><br />
          <label><input type="checkbox" id="4" onChange={() => updateFiltersFunc(4)} checked={check.isCheck[4]}></input>12*12</label><br />
          <label><input type="checkbox" id="5" onChange={() => updateFiltersFunc(5)} checked={check.isCheck[5]}></input>12*15</label><br />
          <label><input type="checkbox" id="6" onChange={() => updateFiltersFunc(6)} checked={check.isCheck[6]}></input>15*15</label><br />
          <label><input type="checkbox" id="7" onChange={() => updateFiltersFunc(7)} checked={check.isCheck[7]}></input>18*18</label><br />
          <label><input type="checkbox" id="8" onChange={() => updateFiltersFunc(8)} checked={check.isCheck[8]}></input>20*6</label><br />
          <label><input type="checkbox" id="9" onChange={() => updateFiltersFunc(9)} checked={check.isCheck[9]}></input>20*10</label><br />
          <label><input type="checkbox" id="10" onChange={() => updateFiltersFunc(10)} checked={check.isCheck[10]}></input>20*20</label><br />
          <label><input type="checkbox" id="11" onChange={() => updateFiltersFunc(11)} checked={check.isCheck[11]}></input>30*20</label><br />
          <label><input type="checkbox" id="12" onChange={() => updateFiltersFunc(12)} checked={check.isCheck[12]}></input>35*10</label><br />
          <label><input type="checkbox" id="13" onChange={() => updateFiltersFunc(13)} checked={check.isCheck[13]}></input>15*15*15</label><br />
          <label><input type="checkbox" id="14" onChange={() => updateFiltersFunc(14)} checked={check.isCheck[14]}></input>20*15*6</label><br />
          <label><input type="checkbox" id="15" onChange={() => updateFiltersFunc(15)} checked={check.isCheck[15]}></input>35.5*27*5.5</label><br />
        
          <span>Крышка:</span><br />
          <label><input type="checkbox" id="16" onChange={() => updateFiltersFunc(16)} checked={check.isCheck[16]}></input>С крышкой</label><br />
          <label><input type="checkbox" id="17" onChange={() => updateFiltersFunc(17)} checked={check.isCheck[17]}></input>Без крышки</label><br />
        
          <span>Цвет:</span><br />
          <label><input type="checkbox" id="18" onChange={() => updateFiltersFunc(18)} checked={check.isCheck[18]}></input>Однотонные</label><br />
          <label><input type="checkbox" id="19" onChange={() => updateFiltersFunc(19)} checked={check.isCheck[19]}></input>С принтом</label><br />
        </div>
      </form>

      <input className='Filter-btn' type='button' value='Показать' onClick={() => setA(true)}/>
       
      <input className='Filter-btn' type='button' value='Сброс'
        onClick={() => setCheck({
          isCheck: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: false,
            16: false,
            17: false,
            18: false,
            19: false,
          },
        })} />
    </div>
      
    );

};