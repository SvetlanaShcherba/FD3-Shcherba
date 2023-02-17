import React from 'react';
import { Outlet } from 'react-router-dom';

import { MobileClient } from './MobileClient';



export const MobileClients = ( { name, clients } ) => {
  
  const clientsCode=clients.map( client =>
    <MobileClient key={client.id} id={client.id} fio={client.fio} balance={client.balance}  />
  );

  return (
    <>
    
      <div className='MobileCompany'>
        <div className='MobileCompanyName'>Компания &laquo;{name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
      </div>

      <Outlet />

    </>
  )
  ;

}
