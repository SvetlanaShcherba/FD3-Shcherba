var Shop = React.createClass({

  displayName: 'Shop',

  propTypes: {
    startItems: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        price: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
      })
    )
  },

  getInitialState: function () {
    return {
      items: this.props.startItems,
      selectedItemCode: '',
    };
  },

  selectItem: function (code) {
    this.setState({ selectedItemCode: code });
  },
  
  deleteItem: function (code) {
    const newItems = this.state.items.filter(v => v.code !== code);
    this.setState({ items: newItems });
  },
  
  render: function () {
    
    return React.DOM.div( { className: 'Shop' },
      React.DOM.h1(null, "Cписок всех товаров"),
      React.DOM.table({ className: 'Items' },
        React.DOM.tbody(null,
          this.state.items.map(v => 
            React.createElement(Item,
              { 
                key: v.code,
                name: v.name,
                code: v.code,
                price: v.price,
                url: v.url,
                count: v.count,
                isSelected: v.code === this.state.selectedItemCode,
                cbDeleteItem: this.deleteItem,
                cbSelectItem: this.selectItem },
            ),
          )
        ),
      )  
    );
  },
});

