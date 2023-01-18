import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './Shop.css';

import Item from './Item';

class Shop extends React.Component {

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

  state = {
    items: this.props.startItems,
    selectedItemCode: '',
  };

  selectItem = (code) => {
    this.setState({ selectedItemCode: code });
  };
  
  deleteItem = (code) => {
    const newItems = this.state.items.filter(v => v.code !== code);
    this.setState({ items: newItems });
  };

  render () {
    
    return DOM.div( { className: 'Shop' },
      DOM.h1(null, "Cписок товаров"),
      DOM.table({ className: 'Items' },
        DOM.tbody(null,
          this.state.items.map(v => 
            React.createElement(Item,
              { 
                key: v.code,
                name: v.name,
                code: v.code,
                price: v.price,
                url: v.url,
                count: v.count,
                isSelected: v.code === this.state.selectedItemCode,
                cbDeleteItem: this.deleteItem,
                cbSelectItem: this.selectItem },
            )
          )
        )
      )  
    );
  }

}

export default Shop;


