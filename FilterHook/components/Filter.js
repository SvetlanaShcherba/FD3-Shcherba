import React, {useState, useEffect} from 'react';

import Controls from "./Controls";
import List from "./List";


import "./Filter.css";

let wordsArr = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

export default props => {
  const [list, setList] = useState(wordsArr.join('\n'));
    
  function changeList(filterStr, isSorted) {
    let newWordsList = wordsArr.slice();
    if (filterStr)
      newWordsList = newWordsList.filter(w => w.includes(filterStr));
    if (isSorted)
      newWordsList.sort();
    setList(newWordsList.join('\n'));
  }

      
  return (
    <div>
      <Controls cbChangeList={changeList}/>
      <List  wordsList={list}/>
    </div>
  );
};
