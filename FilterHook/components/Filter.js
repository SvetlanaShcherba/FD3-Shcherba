import React, {useState, useCallback} from 'react';

import Controls from "./Controls";
import List from "./List";


import "./Filter.css";

let wordsArr = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

export default props => {
  const [isSorted, setSort] = useState(false);
  const [filterStr, setFilter] = useState('');
  const [isReset, setReset] = useState(false);
  

  function changeList(filterStr, isSorted, isReset) {
    if (filterStr)
        setFilter(filterStr); 
    if (isSorted)
      setSort(true);
    (isReset) ? setReset(true) : setReset(false);
    }
 
  return (
    <div>
      <Controls cbChangeList={changeList} />
      <List fullWordsList={wordsArr} isSorted={ isSorted} isReset={isReset} filterStr={filterStr}  cbChangeList={changeList}/>
    </div>
  );
};
