import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Item from './Item';
import ItemCard from './ItemCard';

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
    
    const code = this.state.items.map(v =>
      <Item
        key={v.code}
        name={v.name}
        code={v.code}
        price={v.price}
        url={v.url}
        count={v.count}
        isSelected={v.code === this.state.selectedItemCode}
        cbDeleteItem={this.deleteItem}
        cbSelectItem={this.selectItem}
      />
    ); 
    
    const itemCardCode = this.state.items.map(v =>
      <ItemCard
        key={v.code}
        name={v.name}
        code={v.code}
        price={v.price}
        url={v.url}
        count={v.count}
        isSelected={v.code === this.state.selectedItemCode}
        cbDeleteItem={this.deleteItem}
        cbSelectItem={this.selectItem}
      />
    ); 
    

    return (
      <div className='Shop'>
        <h1>{"Cписок товаров"}</h1>
        <table className='Items'>
          <tbody>{code}</tbody>
        </table>
        
        <input
            className='ButtonNewProduct'
            type='button'
            value='Новый товар'
            onClick={this.newProduct}
        />

        <div>
          {itemCardCode}
        </div>  

     </div>  
    );
  }

}

export default Shop;


