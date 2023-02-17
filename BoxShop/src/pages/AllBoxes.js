import React from 'react';

import { All } from '../components/All';
import './AllBoxes.css';

export const AllBoxes = ({startItems, filter}) => {
    return (
      <All startItems={startItems} filter={filter} />
    );
};
