import React from 'react';

import { All } from '../components/All';
import './AllBoxes.css';

export const AllBoxes = ({listItems}) => {
    return (
      <All listItems={listItems}/>
    );
};
