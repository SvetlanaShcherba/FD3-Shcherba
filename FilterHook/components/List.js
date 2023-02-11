import React, { useState, useEffect, } from 'react';
import "./List.css";

export default ({ wordsList}) => {
  
 return (
    <textarea className="List" value={wordsList} readOnly></textarea>
  );
 
};
