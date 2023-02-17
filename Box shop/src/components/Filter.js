import React,  { useState, useEffect, useRef}  from 'react';

import './Filter.css';

export const Filter = () => {
  const filterRef = useRef(null);

  function reset() {
      
  }

  function showFilteredtems() {
    console.log(document.getElementsByTagName('input'));
 
  }

  

  return (
    <div   className="Filter">
      <div className='Filter-title'>Искать по параметрам:</div>
      <form ref={filterRef}>
        <div className='Filter-type'>
          <span>Тип коробки:</span><br />
          <label><input type="checkbox" value='true'></input>Шляпные коробки</label><br />
          <label><input type="checkbox" value='false'></input>Самосборные коробки</label><br />
          <label><input type="checkbox" value='false'></input>Коробки-книги</label><br />
        </div>

        <div className='Filter-size'>
          <span>Размер, см:</span><br />
          <label><input type="checkbox" value='12*12'></input>12*12</label><br />
          <label><input type="checkbox" value='12*12'></input>12*15</label><br />
          <label><input type="checkbox" value='15*15'></input>15*15</label><br />
          <label><input type="checkbox" value='18*18'></input>18*18</label><br />
          <label><input type="checkbox" value='20*6'></input>20*6</label><br />
          <label><input type="checkbox" value='20*10'></input>20*10</label><br />
          <label><input type="checkbox" value='20*20'></input>20*20</label><br />
          <label><input type="checkbox" value='30*20'></input>30*20</label><br />
          <label><input type="checkbox" value='35*10'></input>35*10</label><br />
          <label><input type="checkbox" value='15*15*15'></input>15*15*15</label><br />
          <label><input type="checkbox" value='20*15*6'></input>20*15*6</label><br />
          <label><input type="checkbox" value='35.5*27*5.5'></input>35.5*27*5.5</label><br />
        </div>

        <div className='Filter-lid'>
          <span>Крышка:</span><br />
          <label><input type="checkbox" value='true'></input>С крышкой</label><br />
          <label><input type="checkbox" value='false'></input>Без крышки</label><br />
        </div>

        <div className='Filter-color'>
          <span>Цвет:</span><br />
          <label><input type="checkbox" value='solid color'></input>Однотонные</label><br />
          <label><input type="checkbox" value='print'></input>С принтом</label><br />
        </div>
      </form>

      <input className='Filter-btn' type='button' value='Показать' onClick={showFilteredtems}/>
       
      <input className='Filter-btn' type='button' value='Сброс'  />
    </div>
      
    );

};