import React, { useState, useEffect, } from 'react';
import "./List.css";

export default ({ filterStr, fullWordsList, isSorted, isReset}) => {
  
  const [list, setList] = useState(fullWordsList.join('\n'));

  let newWordsList = fullWordsList.slice();
    if (filterStr)
          newWordsList = newWordsList.filter(w => w.includes(filterStr));
    if (isSorted)
      newWordsList.sort();
  
  useEffect(
    () => {
      setList(newWordsList.join('\n'));
    },
    [filterStr, isSorted],
  );
  
  useEffect(
    () => {
      setList(fullWordsList.join('\n'));
    },
    [isReset===true],
  );
  
  return (
    <textarea className="List" value={list} readOnly></textarea>
  );
 
};
