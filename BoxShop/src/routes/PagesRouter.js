import React, {useCallback, useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import { AllBoxes } from '../pages/AllBoxes';
import { PageItem } from '../pages/PageItem';
import { PageBasket } from '../pages/PageBasket';
import { PageFilteredItems } from '../pages/PageFilteredItems';
import { Filter } from '../components/Filter';

let itemsArr = require('./items.json');

export const PagesRouter = () => {
  const [list, setList] = useState(itemsArr); 

  const showFilteredItems = useCallback((l) => {
    setList(l);
  }, []);
  
   return (
    <>
      <Filter cbShowFilteredItems={showFilteredItems} startItems={itemsArr} />
      <Routes>
        <Route path="/" element={<AllBoxes listItems={list} />} />
        <Route path="/filter" element={<PageFilteredItems listItems={list} />} />
        <Route path="/:code" element={<PageItem startItems={itemsArr} />} />
        <Route path="/basket" element={<PageBasket listItems={itemsArr} />} />
        <Route path="/1-20" element={<AllBoxes listItems={list.slice(0, 20)} />} />
        <Route path="/21-40" element={<AllBoxes listItems={list.slice(20)} />} />
        <Route path="/41-60" element={<AllBoxes listItems={list.slice(40, 60)} />} />
      </Routes>
    </>
  );
};

