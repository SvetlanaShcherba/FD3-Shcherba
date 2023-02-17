import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AllBoxes } from '../pages/AllBoxes';
import { PageCompany } from '../pages/PageCompany';
import { PageClients } from '../pages/PageClients';
import { PageClient } from '../pages/PageClient';

let itemsArr = require('./items.json');
let items20 = itemsArr.slice(0, 20);
let items40 = itemsArr.slice(20, 40);
let items60 = itemsArr.slice(40, 60);

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<AllBoxes startItems={itemsArr}/>} />
        <Route path="/1-20" element={<AllBoxes startItems={items20} />} />
        <Route path="/21-40" element={<AllBoxes startItems={items40} />} />
        <Route path="/41-60" element={<AllBoxes startItems={items60}/>} />
        <Route path="/clients" element={<PageClients/>}>
          <Route path=":clid" element={<PageClient/>} />
        </Route>
      </Routes>
    );
    
};
