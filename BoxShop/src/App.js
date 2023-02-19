import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesLinks } from './components/PagesLinks';
import { PagesRouter } from './routes/PagesRouter';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './redux/reducers.js';

const store=createStore(combinedReducer);

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <PagesLinks/>
            <PagesRouter/>            
        </BrowserRouter>
    </Provider>
    
);
