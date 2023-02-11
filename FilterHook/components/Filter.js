import React, {useState} from 'react';

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
    (isSorted) ? setSort(true) : setSort(false);
    (isReset) ? setReset(true) : setReset(false);   
  }

    
  return (
    <div>
      <Controls cbChangeList={changeList} />
      <List fullWordsList={wordsArr} isSorted={ isSorted} isReset={isReset} filterStr={filterStr}  cbChangeList={changeList}/>
    </div>
  );
};
