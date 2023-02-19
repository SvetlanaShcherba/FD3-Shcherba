const COUNT_ADD = 'FRUIT_APPLE_ADD';
const ITEM_UPDATE='ITEM_UPDATE'; 

const countItemsAdd=function(amount) {
  return {
    type: COUNT_ADD,
    amount:amount,
  };
}

const itemUpdate=function(name,price) {
  return {
    type: ITEM_UPDATE,
    name: name,
    price: price,
  };
}


export {
    countItemsAdd, COUNT_ADD,
    itemUpdate, ITEM_UPDATE,
}