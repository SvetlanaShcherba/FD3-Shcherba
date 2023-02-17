import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import { AllBoxes } from '../pages/AllBoxes';
import { PageItem } from '../pages/PageItem';
import { PageBasket } from '../pages/PageBasket';
import { Filter } from '../components/Filter';


let itemsArr = require('./items.json');
let items20 = itemsArr.slice(0, 20);
let items40 = itemsArr.slice(20, 40);
let items60 = itemsArr.slice(40, 60);

export const PagesRouter = () => {
  const [filter, setFilter] = useState(); 

  function showFilteredItems(f) {
    setFilter(f);
  }
  
  return (
    <>
      <Filter className="Filter" cbShowFilteredItems={showFilteredItems} />
      <Routes>
        <Route path="/" element={<AllBoxes startItems={itemsArr} filter={filter} />}/>
        <Route path="/:code" element={<PageItem startItems={itemsArr} />} />
        <Route path="/basket" element={<PageBasket startItems={itemsArr}/>} />
        <Route path="/1-20" element={<AllBoxes startItems={items20} />} />
        <Route path="/21-40" element={<AllBoxes startItems={items40} />} />
        <Route path="/41-60" element={<AllBoxes startItems={items60}/>} />
      </Routes>

      
      </>
    );
    
};
