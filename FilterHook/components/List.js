import React, { useState, useEffect, } from 'react';
import "./List.css";

export default ({ filterStr, fullWordsList, isSorted, isReset}) => {
  
  const [list, setList] = useState(fullWordsList);
  
  let newWordsList = fullWordsList.slice();
  if (filterStr)
    newWordsList=newWordsList.filter(w => w.includes(filterStr));
  if (isReset)
    newWordsList=fullWordsList.slice();
  if (isSorted)
    newWordsList.sort();
  
  useEffect(
    () => {
      setList(newWordsList);
    },
    [filterStr, isSorted,  isReset],
  );

     
 return (
    <textarea className="List" value={list.join('\n')} readOnly></textarea>
  );
 
};
