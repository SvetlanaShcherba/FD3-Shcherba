import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[ 
  {code:101, surname:"Иванов", nameCl:"Игнат", otch: "Иванович", balance:200}, 
  {code:105, surname:"Сидоров", nameCl:"Сергей", otch: "Семенович", balance:250}, 
  {code:110, surname:"Петров", nameCl:"Петр", otch: "Павлович", balance:180},
  {code:120, surname:"Григорьев", nameCl:"Геннадий", otch: "Григорьевич", balance:-220},
];

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

