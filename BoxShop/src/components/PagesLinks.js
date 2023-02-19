import React from 'react';
import { NavLink } from 'react-router-dom';


import './PagesLinks.css';

export const PagesLinks = ({cbShowMenu}) => {
  function getLinkClass(obj) {
      let className="PageLink";
      if ( obj.isActive )
        className+=" ActivePageLink";
      return className;
  }

    return (
      <div className="PageLinks">
        <NavLink to="/" end className={getLinkClass}>Все коробки</NavLink>
        <NavLink to="/1-20" className={getLinkClass}>1-20</NavLink>
        <NavLink to="/21-40" className={getLinkClass}>21-40</NavLink>
        <NavLink to="/41-60" className={getLinkClass}>41-60</NavLink>
        <NavLink to="/basket" className={getLinkClass}>Корзина</NavLink>
      </div>
    );

};
