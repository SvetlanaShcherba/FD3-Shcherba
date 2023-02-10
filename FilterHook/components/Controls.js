import React, { useState, useEffect } from 'react';

import "./Controls.css";


export default ({cbChangeList }) => {
  const [isSorted, setSort] = useState(false);
  const [filterStr, setFilter] = useState('');
  const [isReset, setReset] = useState(false);
    
  useEffect(
        () => {
           cbChangeList(filterStr, isSorted, isReset);
        },
        [filterStr, isSorted, isReset]
  );
  
  
  function reset() {
    setSort(false);
    setFilter('');
    setReset(!isReset);
  }

  
  return (
    <div className="Controls">
      <input type="checkbox" checked={isSorted} onChange={() => setSort(!isSorted)}></input>
      <input type='text' value={filterStr} onChange={(eo) => setFilter(eo.target.value)}></input>
      <input type='button' value="Сброс" onClick={reset}></input>
    </div>
  )
};
