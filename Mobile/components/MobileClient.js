import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    
    info:PropTypes.shape({
      code: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      nameCl: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
    mode: 1, //1 - режим отображения, 2 -  режим редактирования
  };

  newSurnameRef = React.createRef();
  newNameRef = React.createRef();
  newOtchRef = React.createRef();
  newBalanceRef = React.createRef();

  componentDidUpdate = (oldProps, oldState) => {
    if ( this.props.info!==this.state.info )
      this.setState({ info: this.state.info });
    };
    
  deleteClient = () => {
    clientEvents.emit('EDeleteClicked',this.props.info.code);
  };

  editClient = () => {
    this.setState({ mode: 2 });
  };

  saveСhanges = () => {
    let newSurname = this.newSurnameRef.current.value;
    let newName = this.newNameRef.current.value;    
    let newOtch = this.newOtchRef.current.value;
    let newBalance = this.newBalanceRef.current.value;
    let newClient = { ...this.state.info, balance: newBalance, surname: newSurname, nameCl: newName, otch: newOtch };
    this.setState({ info: newClient, mode: 1 });
     
    clientEvents.emit('EEditClicked', this.state.info.code, newSurname, newName, newOtch, newBalance);
  };


  render() {

    console.log("MobileClient code=" + this.state.info.code + " render");
    
    if (this.state.mode === 1) {
      return (
        <tr className='MobileClient' key={this.props.info.code}>
          
          <td>{this.state.info.surname}</td>
          <td>{this.state.info.nameCl}</td>
          <td>{this.state.info.otch}</td>
          <td>{this.state.info.balance}</td>
          <td style={(this.state.info.balance > 0) ? { backgroundColor: 'green' } :
            (this.state.info.balance === "") ? { backgroundColor: '' } :
              { backgroundColor: 'red' }}>
            
            {(this.state.info.balance > 0) ? "Активен" :
              (this.state.info.balance === "") ?'':
              "Заблокирован"}</td>

          <td>
            <input className='Button' type='button' value='Удалить' onClick={this.deleteClient}/>
          </td>
          
          <td>
            <input className='Button' type='button' value='Редактировать' onClick={this.editClient} />
          </td>
        </tr>
      );
    }
    
    else  {
      return (
        <tr className='MobileClient' key={this.props.info.code}>
          <td><input type='text' defaultValue={this.state.info.surname} ref={this.newSurnameRef}></input></td>
          <td><input type='text' defaultValue={this.state.info.nameCl} ref={this.newNameRef}></input></td>
          <td><input type='text' defaultValue={this.state.info.otch} ref={this.newOtchRef}></input></td>
          <td><input type='text' defaultValue={this.state.info.balance} ref={this.newBalanceRef}></input></td>
          <td>{this.state.info.active}</td>
          
          <td>
            <input
              className='Button'
              type='button'
              value='Удалить'
              onClick={this.deleteClient}
            />
          </td>
          
          <td>
            <input
              className='Button'
              type='button'
              value='Редактировать'
              onClick={this.editClient}
            />
            <input type="button" value="Ok" onClick={this.saveСhanges} />
          </td>
        </tr>
      )
    }
  }  

}

export default MobileClient;
