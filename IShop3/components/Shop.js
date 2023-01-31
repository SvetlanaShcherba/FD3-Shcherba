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
    selectedItem: '',
    itemCardMode: 2, //1-карточка в режиме отображения информации, 2 - в режиме редактирования
  };

  selectItem = (code) => {
    this.setState({ selectedItemCode: code });
    let curSelectedItem = this.state.items.filter(v => v.code === code);
    this.setState({ selectedItem: curSelectedItem[0], itemCardMode: 1  });
    
  };
  
  deleteItem = (code) => {
    const newItems = this.state.items.filter(v => v.code !== code);
    this.setState({ items: newItems });
  };

  editItem = (code) => {
    this.setState({ itemCardMode: 2 });
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
        cbEditItem={this.editItem}
      />
    ); 
    
    
    let codeItemCard = this.state.selectedItem;
    
       

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

        
        {this.state.selectedItemCode!=='' &&
          <ItemCard
            name={codeItemCard.name}
            price={codeItemCard.price}
            code={codeItemCard.code}
            cardMode={this.state.itemCardMode}
            
          />
        }
        
      </div>  
    );
  }

}

export default Shop;


