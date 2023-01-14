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
        cbSelectItem: React.PropTypes.func.isRequired,
        cbDeleteItem: React.PropTypes.func.isRequired,
      })
    )
  },
  
  
  delete: function(eo) {
    eo.stopPropagation;
    this.props.cbDeleteItem (this.props.code)
  },
  
  select: function () {
    this.props.cbSelectItem(this.props.code)
  },
    

  render: function () {
      return  React.DOM.tr({key: this.props.code, onClick: this.select, className: this.props.isSelected === true? 'active':""},
        React.DOM.td(null,
          React.DOM.img({src: this.props.url, className: 'Img' },),
        ),
        React.DOM.td({ className: 'Name' }, this.props.name),
        React.DOM.td({ className: 'Price' }, this.props.price),
        React.DOM.td({ className: 'Count' }, this.props.count),
        React.DOM.td({},
          React.DOM.input({ className: 'ButtonDel', type: 'button', value: 'Удалить', onClick: this.delete }),
        ),
      
        )
          
  },

});

