import React, { useState, useEffect, useMemo } from 'react';


export default ({cbChangeList }) => {
  const [isSorted, setSort] = useState(false);
  const [filterStr, setFilter] = useState('');
    
  useEffect(
        () => {
           cbChangeList(filterStr, isSorted );
        },
        [filterStr]
  );
  
  const memoizeedRenderResult = useMemo(
      
    () => {
      function reset() {
        setSort(false);
        setFilter('');
      }
  
      function filter(eo) {
        setFilter(eo.target.value);
        cbChangeList(filterStr, isSorted );
      }

      return (
        <div className="Controls">
          <input type="checkbox" checked={isSorted} onChange={() => setSort(!isSorted)}></input>
          <input type='text' value={filterStr} onChange={filter}></input>
          <input type='button' value="Сброс" onClick={reset}></input>
        </div>
      )
    },
  [isSorted, filterStr]
  );
  return memoizeedRenderResult;
};