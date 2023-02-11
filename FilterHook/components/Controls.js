import React, { useState, useEffect, useRef } from 'react';

import "./Controls.css";


export default ({ cbChangeList }) => {
  const [isSorted, setSort] = useState(false);
  const [filterStr, setFilter] = useState('');
  const [isReset, setReset] = useState(false);

  const filterRef = useRef(null);   
  
  useEffect(
    () => {
        cbChangeList(filterStr, isSorted, isReset);
    },
    [filterStr, isSorted, isReset]
  );
  

  function reset() {
      setSort(false);
      setFilter('');
      setReset(true);
  }
  
  function filter() {
    setFilter(filterRef.current.value);
    cbChangeList(filterStr, isSorted, isReset)
  }

  
      return (
        <div className="Controls">
          <input type="checkbox" checked={isSorted} onChange={() => setSort(!isSorted)}></input>
          <input type='text'  ref={filterRef} value={filterStr} onChange={filter}></input>
          <input type='button' value="Сброс" onClick={reset}></input>
        </div>
      )    
};




  