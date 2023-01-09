var ishop = React.createClass({

  displayName: 'Ishop',

  propTypes: {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        price: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
      })
    )
  },

  render: function () {
    
    var itemsCode = this.props.items.map(v =>
        
      React.DOM.tr({ key: v.code, className: 'Item' },
        React.DOM.td(null,
          React.DOM.img({ src: v.url, className: 'Img' },),
        ),
        React.DOM.td({ className: 'Name' }, v.name),
        React.DOM.td({ className: 'Price' }, v.price),
        React.DOM.td({ className: 'Count' }, v.count),
      )
      
    )

    return React.DOM.div(
      { className: 'Ishop' },
      React.DOM.h1(null, "Cписок товаров"),
      React.DOM.table({ className: 'Items' },
        React.DOM.tbody(null, itemsCode),
      )  
    );
  },

});

