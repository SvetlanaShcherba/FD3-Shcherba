import React, { useState, useEffect, useRef } from 'react';

import "./Controls.css";


export default ({ cbChangeList }) => {
  const [isSorted, setSort] = useState(false);
  const [filterStr, setFilter] = useState('');
   
  useEffect(
    () => {
        cbChangeList(filterStr, isSorted);
    },
    [filterStr, isSorted]
  );
  

  function reset() {
      setSort(false);
      setFilter('');
  }
  
return (
    <div className="Controls">
      <input type="checkbox" checked={isSorted} onChange={() => setSort(!isSorted)}></input>
      <input type='text'  value={filterStr} onChange={(eo) => setFilter(eo.target.value)}></input>
      <input type='button' value="Сброс" onClick={reset}></input>
    </div>
  )    
};




  