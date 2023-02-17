import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PagesLinks } from './components/PagesLinks';
import { Filter } from './components/Filter';
import { PagesRouter } from './routes/PagesRouter';

export const App = () => (
    <BrowserRouter>
        <div>
            <PagesLinks />
            <Filter className="Filter"/>
            <PagesRouter />
        </div>
    </BrowserRouter>
);
