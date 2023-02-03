import React from 'react';
import PropTypes from 'prop-types';

class NewItemCard extends React.Component {

  static propTypes = {
      code: PropTypes.number,
      cbSaveNewItem: PropTypes.func,
      cbCancel: PropTypes.func,
  };

  state = {
    name:'',
    price: '',
    url: '',
    count: '',
    nameErr: '',
    priceErr: '',
    countErr: '',
    urlErr: '',
    formValid: true,
  };

 
  nameChanged = (eo) => {
    this.setState({name: eo.target.value})
  };

  priceChanged = (eo) => {
    this.setState({price: eo.target.value}, this.validate)
  };

  urlChanged = (eo) => {
    this.setState({url: eo.target.value}, this.validate)
  };

  countChanged = (eo) => {
    this.setState({count:eo.target.value}, this.validate)
  };
  
  validate = () => {
    let nameErr = '';
    if (!this.state.name) 
      nameErr = 'введите навание';
    this.setState({ nameErr });
    
    let priceErr = '';
    if (!this.state.price)
      priceErr = 'укажите стоимость товара';
    this.setState({ priceErr });
    
    let urlErr = '';
    if (!this.state.url)
      urlErr = 'введите url';
    this.setState({ urlErr });
    
    let countErr = '';
    if (!this.state.count)
      countErr='укажите количество товара';
    this.setState({ countErr });
    
    this.setState({ formValid: !this.state.nameErr && !this.state.countErr && !this.state.priceErr && !this.state.urlErr });
    
    
  };

  saveNewItem = () => {
    this.validate();
    if (this.state.formValid) {
      this.props.cbSaveNewItem(this.state.name, this.state.price, this.state.url, this.state.count, this.state.count.code );
    }
  };

  cancelEdit = () => {
    this.props.cbCancel();
    this.setState({
      name: this.props.name,
      price: this.props.price,
      url: this.props.url,
      count: this.props.count,
    });
  };

  render() {
    
      return (
      
        <div className='ItemCard '>
          <h2>{"Добавить новый товар"}</h2>
          <span>{`ID: ${this.props.code}`}</span><br />
          <label>Наименование:
            <input type='text' value={this.state.name} style={{ marginLeft: "10px" }} onChange={this.nameChanged} ></input><span className='err'>{this.state.nameErr }</span>
          </label><br />
          <label>Стоимость:
            <input type='text' value={this.state.price} style={{marginLeft: "36px"}} onChange={this.priceChanged}></input><span className='err'>{this.state.priceErr }</span>
          </label><br />
          <label>URL:
            <input type='text' value={this.state.url} style={{marginLeft: "78px"}} onChange={this.urlChanged}></input><span className='err'>{this.state.urlErr }</span>
          </label><br />
          <label>Количество:
            <input type='text' value={this.state.count} style={{marginLeft: "30px"}} onChange={this.countChanged}></input><span className='err'>{this.state.countErr }</span>
          </label><br />
          <input
            type='button'
            value='Сoхранить'
            onClick={this.saveNewItem}
            disabled={!this.state.formValid}
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

export default NewItemCard;

 