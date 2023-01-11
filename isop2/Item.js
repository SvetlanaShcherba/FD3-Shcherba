var Item = React.createClass({

  displayName: 'Item',

  propTypes: {
      startItems: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        price: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
      })
    )
  },
  
  delete: function() {
    eo.stopPropagation;
    this.props.cbDeleteItem (this.props.code)
  },
  
  select: function() {
    this.props.cbSelectItem (this.props.code)
  },

  render: function () {
      return  React.DOM.tr({ key: v.code, className: 'Item', onClick: this.select },
        React.DOM.td(null,
          React.DOM.img({ src: v.url, className: 'Img' },),
        ),
        React.DOM.td({ className: 'Name' }, v.name),
        React.DOM.td({ className: 'Price' }, v.price),
        React.DOM.td({ className: 'Count' }, v.count),
        React.DOM.td({},
          React.DOM.input({ className: 'ButtonDel', type: 'button', value: 'Удалить', onClick: this.delete }),
        ),
      
      )
    
    
  },

});

