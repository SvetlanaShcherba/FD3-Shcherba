import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import { AllBoxes } from '../pages/AllBoxes';
import { PageItem } from '../pages/PageItem';
import { PageBasket } from '../pages/PageBasket';
import { PageFilteredItems } from '../pages/PageFilteredItems';
import { Filter } from '../components/Filter';


let itemsArr = require('./items.json');
let items20 = itemsArr.slice(0, 20);
let items40 = itemsArr.slice(20, 40);
let items60 = itemsArr.slice(40, 60);

export const PagesRouter = () => {
  const [list, setList] = useState(itemsArr); 

  function showFilteredItems(l) {
    setList(l);
  }
  
  return (
    <>
      <Filter className="Filter" cbShowFilteredItems={showFilteredItems} startItems={itemsArr}/>
      <Routes>
        <Route path="/" element={<AllBoxes listItems={items60} />} />
        <Route path="/filter" element={<PageFilteredItems listItems={list} />} />
        <Route path="/:code" element={<PageItem startItems={itemsArr} />} />
        <Route path="/basket" element={<PageBasket listItems={itemsArr}/>} />
        <Route path="/1-20" element={<AllBoxes listItems={items20} />} />
        <Route path="/21-40" element={<AllBoxes listItems={items40} />} />
        <Route path="/41-60" element={<AllBoxes listItems={items60}/>} />
      </Routes>

      
      </>
    );
    
};
