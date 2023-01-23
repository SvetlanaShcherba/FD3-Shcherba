import React from 'react';
import PropTypes from 'prop-types';

import './ItemCard.css';

class ItemCard extends React.Component {

  static propTypes = {
    startItems: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    )  
  };

   
  render() {
    if (this.props.isSelected) {
      return (
        <div className='ItemCard '>
          <h2>{this.props.name}</h2>
          <span>{this.props.name}</span><br />
          <span>{"Стоимость:" + this.props.price}</span>
        </div>
      );
    }
    else return null;
  }

}

export default ItemCard;
