import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

let itemsArr=require('./items.json');

ReactDOM.render(
  <Shop
    startItems={itemsArr}
  />
  , document.getElementById('container')
);

