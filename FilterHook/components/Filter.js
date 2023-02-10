import React, {useState, useCallback} from 'react';

import Controls from "./Controls";
import List from "./List";


import "./Filter.css";

let wordsArr = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

export default props => {
  const [isSorted, setSort] = useState(false);
  const [filterStr, setFilter] = useState('');

  function changeList(filterStr, isSorted,) {
    if (filterStr)
        setFilter(filterStr); 
    if (isSorted)
        setSort(true);
    }
 
  const memoizedChangeList= useCallback( changeList, [] );

  return (
    <div>
      <Controls cbChangeList={memoizedChangeList} />
      <List fullWordsList={wordsArr} isSorted={ isSorted} filterStr={filterStr} cbChangeList={memoizedChangeList}/>
    </div>
  );
};
