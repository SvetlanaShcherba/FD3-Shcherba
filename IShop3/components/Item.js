import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

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
    eo.stopPropagation;
    this.props.cbDeleteItem (this.props.code)
  };

  select = () => { 
    this.props.cbSelectItem(this.props.code)
  };

  render () {
      return  DOM.tr({key: this.props.code, onClick: this.select, className: this.props.isSelected === true? 'active':""},
        DOM.td(null,
          DOM.img({src: this.props.url, className: 'Img' },),
        ),
        DOM.td({ className: "Name" }, this.props.name),
        DOM.td({ className: 'Price' }, this.props.price),
        DOM.td({ className: 'Count' }, this.props.count),
        DOM.td({},
          DOM.input({ className: 'ButtonDel', type: 'button', value: 'Удалить', onClick: this.delete }),
        ),
      )      
  }
}

export default Item;

 