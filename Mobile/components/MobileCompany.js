import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import {clientEvents} from './events';

import './MobileCompany.css';



class MobileCompany extends React.PureComponent {
  

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        nameCl: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    showMode: 1,
  
  };

  componentDidMount = () => {
    clientEvents.addListener('EDeleteClicked',this.deleteClient);
    clientEvents.addListener('EEditClicked', this.editClient);
  };


  componentWillUnmount = () => {
    clientEvents.removeListener('EDeleteClicked',this.deleteClient);
    clientEvents.removeListener('EEditClicked', this.editClient);
  };
  
  deleteClient = (code) => {
    let clients = this.state.clients.slice();
    const clientIndex = clients.findIndex(cl => cl.code === code);
    if (clientIndex !== -1) {
      let newClients = this.state.clients.filter(cl => cl.code !== code);
      this.setState({ clients: newClients });
    }    
  };

  editClient = (code, surname, nameCl, otch, balance) => {
    let clients = this.state.clients.slice();
    const clientIndex = clients.findIndex(cl => cl.code === code);
    if (clientIndex !== -1) {
      let newClient = { ...clients[clientIndex], surname, nameCl, otch, balance};
      clients[clientIndex] = newClient;
      this.setState({ clients: clients });
    } 
  };

  showAllClients = () => {
    this.setState({ showMode: 1 });  
  };

  showActiveClients = () => {
    this.setState({ showMode: 2 });  
  };

  showBlockedСlients = () => {
    this.setState({ showMode: 3 });  
  };


  addNewСlient = () => {
    let clients = this.state.clients.slice();
    let indexNewClient= clients[clients.length-1].code + 130;
    let newClient = { code: indexNewClient, surname: "", nameCl: "", otch: "",  };
    clients[clients.length] = newClient;
    this.setState({ clients: clients });
  };


  render() {
    console.log("MobileCompany render");
    var clientsCode;
    if (this.state.showMode === 1) {
      clientsCode = this.state.clients.map(cl =>
        <MobileClient key={cl.code} info={cl} />);
    }

    if (this.state.showMode === 2) {
      clientsCode = this.state.clients.filter(cl => cl.balance > 0).map(cl =>
        <MobileClient key={cl.code} info={cl} />);
    }
    if (this.state.showMode === 3) {
      clientsCode = this.state.clients.filter(cl => cl.balance < 0).map(cl =>
        <MobileClient key={cl.code} info={cl} />);
    }
   
    
    return (
      <div className='MobileCompany'>
        <input type='button' value='Все' onClick={this.showAllClients}/>
        <input type="button" value="Активные" onClick={this.showActiveClients} />
        <input type="button" value="Заблокированные" onClick={this.showBlockedСlients} />

        <table>
          <tbody>
            <tr className='MobileCompanyTableHeader' key={4}>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Активность</td>
              <td>Удалить</td>
              <td>Редактировать</td>
            </tr>  
            {clientsCode}
          </tbody>
        </table>
                
        <input type="button" defaultValue="Добавить клиента" onClick={this.addNewСlient} />
      </div>
    );
  }
}

export default MobileCompany;
