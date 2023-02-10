import React, { useState, useEffect,} from 'react';

export default ({ filterStr, fullWordsList, isSorted}) => {
  
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
        [filterStr]
  );
  
  
  
    
    
 
  return (
    <div className="List">
      <textarea className='text' value={list} readOnly></textarea>
    </div>
  );
 
};
