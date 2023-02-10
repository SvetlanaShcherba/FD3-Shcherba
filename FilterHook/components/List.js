import React, { useState, useEffect,} from 'react';

export default ({filterStr, fullWordsList, isSorted}) => {
  const [list, setList] = useState(fullWordsList.join('\n'));

  
    
  
  function changeWordsList() {
    let newWordsList = fullWordsList.slice();
    if (filterStr)
          newWordsList = newWordsList.filter(w => w.includes(filterStr));
    if (isSorted)
          newWordsList.sort();
    console.log(newWordsList);
    setList(newWordsList.join('\n'));
        
  }
     
      return (
        <div className="List">
          <textarea className='text' value={list} onChange={changeWordsList}></textarea>
        </div>
      );
  


  
};
