import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'A1'});
  };
  
  setBalance = (clientId,newBalance) => {
    let newClients=this.state.clients;
    newClients.forEach( c => {
      if ( c.id==clientId )
        c.balance=newBalance;
    } );
    this.setState({clients:newClients});
  };

  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");

    const clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input type='button' value='Все' onClick={this.showAllClients}/>
        <input type="button" value="Активные" onClick={this.showActiveСlients} />
        <input type="button" value="Заблокированные" onClick={this.showBlockedСlients} />

        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        
        <input type="button" value="Добавить клиента" onClick={this.this.addNewСlient} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
