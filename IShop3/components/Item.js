import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends React.Component {

  static propTypes = {
    startItems: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        cbSelectItem: PropTypes.func.isRequired,
        cbDeleteItem: PropTypes.func.isRequired,
      })
    )  
  };

  delete = (eo) => {
    eo.stopPropagation();
    this.props.cbDeleteItem (this.props.code)
  };

  select = () => { 
    this.props.cbSelectItem(this.props.code)
  };

  edit = (eo) => { 
    eo.stopPropagation();
    this.props.cbEditItem(this.props.code)
  };


  render () {
    return (
      
        <tr className={this.props.isSelected === true? 'active':""}
            key={this.props.code}
            onClick={this.select}>
            <td>
              <img className='Img' src={this.props.url}></img>
            </td>
            <td className='Name'>{this.props.name}</td>
            <td className='Price'>{this.props.price}</td>
            <td className='Count'>{this.props.count}</td>

            <td>
              <input
                className='Button'
                type='button'
                value='Удалить'
                onClick={this.delete}
              />
            </td>
            
            <td>
              <input
                className='Button'
                type='button'
                value='Редактировать'
                onClick={this.edit}
              />
            </td> 
        </tr>
        
        

      
    
      
    )      
  }
}

export default Item;

 