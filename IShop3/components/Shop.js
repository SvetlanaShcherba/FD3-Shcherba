import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import Item from './Item';
import ItemCard from './ItemCard';
import NewItemCard from './NewItemCard';



class Shop extends React.Component {

  static propTypes = {
    startItems: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    )  
  };

  state = {
    items: this.props.startItems,
    selectedItemCode: '',
    editedItem: '',
    pressedItemCode: '',
    selectedItem: '',
    isDisabled: false,
    itemCardMode: 1, //1-карточка в режиме отображения информации, 2 - в режиме редактирования, 3 - добавить новый товар
    codeNewItem: '',
  };

  

  selectItem = (code) => {
    let curSelectedItem = this.state.items.filter(v => v.code === code);
    this.setState({ selectedItem: curSelectedItem[0], itemCardMode: 1, selectedItemCode: code , isDisabled: false,});
    console.log(this.state.selectedItemCode+ 'выделен');
  };
  
  deleteItem = (code) => {
    const newItems = this.state.items.filter(v => v.code !== code);
    this.setState({ items: newItems });
  };

  editItem = (code) => {
    let editedItem = this.state.items.filter(v => v.code === code);
    this.setState({ editedItem: editedItem[0], itemCardMode: 2, pressedItemCode: code, selectedItemCode: code, isDisabled: true, });
  };


  addNewItem = () => {
    this.setState({ itemCardMode: 3 });
    let codeNewItem = this.state.items.length + 1;
    this.setState({ codeNewItem: codeNewItem });
    
  };

  saveСhanges = (name, price, url, count,) => {
    let newItems = this.state.items.slice();
    newItems.forEach(item => {
      if (item.code === this.state.pressedItemCode) {
        item.name = name;
        item.price = price;
        item.url = url;
        item.count = count;
      }
    this.setState({ itemCardMode: 1, isDisabled: false, }); 
    });
    
    this.setState({ items: newItems });
  };

  saveNewItem = (name, price, url, count) => {
    let newItemsArr = this.state.items.slice();
    let newItem = { name: name, price: price, url: url, count: count, code: this.state.codeNewItem}
    newItemsArr[newItemsArr.length] = newItem;
    this.setState({ items: newItemsArr, itemCardMode: 1, isDisabled: false, });
    
  };


  cansel = () => {
    this.setState({ itemCardMode: 1, isDisabled: false, selectedItemCode: '', });
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
        isDisabled={this.state.isDisabled}
        cbDeleteItem={this.deleteItem}
        cbSelectItem={this.selectItem}
        cbEditItem={this.editItem}
        
      />
      
    ); 
    
    
    let codeItemCard = this.state.selectedItem;
    let codeEditedItem = this.state.editedItem;
       

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
          onClick={this.addNewItem}
          disabled={this.state.isDisabled}
        />

        
        {
          (this.state.selectedItemCode !== '') && (this.state.itemCardMode == 1) &&
          <ItemCard
            key ={1}
            name={codeItemCard.name}
            price={codeItemCard.price}
            code={this.state.selectedItemCode}
            url={codeItemCard.url}
            count={codeItemCard.count}
            cardMode={this.state.itemCardMode}
            cbSave={this.saveСhanges}
            cbCancel={this.cansel}
          />
        }

        {
          (this.state.itemCardMode == 2) &&
          <ItemCard
            key ={2}
            name={codeEditedItem.name}
            price={codeEditedItem.price}
            code={this.state.pressedItemCode}
            url={codeEditedItem.url}
            count={codeEditedItem.count}
            cardMode={this.state.itemCardMode}
            cbSave={this.saveСhanges}
            cbCancel={this.cansel}
          />
        }

        {
          (this.state.itemCardMode == 3) &&
          <NewItemCard
            code={this.state.codeNewItem}
            cardMode={this.state.itemCardMode}
            cbSaveNewItem={this.saveNewItem}
            cbCancel={this.cansel}
          />
        }
        

      </div>  
    );
    
  }


}

export default Shop;

