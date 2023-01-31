import React from 'react';
import PropTypes from 'prop-types';



class ItemCard extends React.Component {

  static propTypes = {
      price: PropTypes.string,
      name: PropTypes.string,
      code: PropTypes.number,
      url: PropTypes.string,
      count: PropTypes.number,
      cbNewName: PropTypes.func.isRequired,
 };

    
  render() {
    
    if (this.props.cardMode === 1) {
      return (
      
        <div className='ItemCard '>
          <h2>{this.props.name}</h2>
          <span>{this.props.name}</span><br />
          <span>{"Стоимость: " + this.props.price}</span>
        </div>
      )
    }
    else if (this.props.cardMode === 2) {
      return (
      
        <div className='ItemCard '>
          <h2>{"Редактировать"}</h2>
          <span>{`ID: ${this.props.code}`}</span><br />
          <label>Наименование:
            <input type='text' defaultValue={this.props.name} style={{marginLeft: "10px"} } ></input>
          </label><br />
          <label>Стоимость:
            <input type='text' defaultValue={this.props.price} style={{marginLeft: "36px"}}></input>
          </label><br />
          <label>URL:
            <input type='text' defaultValue={this.props.url} style={{marginLeft: "78px"}}></input>
          </label><br />
          <label>Количество:
            <input type='text' defaultValue={this.props.count} style={{marginLeft: "30px"}}></input>
          </label><br />
          <input
                type='button'
                value='Сoхранить'
                onClick={this.save}
          />
          <input
                type='button'
                value='Отмена'
                onClick={this.cancelEdit}
              />
          
        </div>
      )
    }
  }
}

export default ItemCard;

 