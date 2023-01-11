var Item = React.createClass({

  displayName: 'Item',

    propTypes: {
        startItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            code: React.PropTypes.number.isRequired,
            count: React.PropTypes.number.isRequired,
            price: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            isSelected:
        })
        )
    },

    getInitialState: function () {
        return {
            items: this.props.startItems,
            selectedItemCode: '',  
        };
    },
  
    deleteItem() {
      
    },

    render: function () {
        
        var itemsCode = this.props.startItems.map(v =>
            
        React.DOM.tr({ key: v.code, className: 'Item' },
            React.DOM.td(null,
            React.DOM.img({ src: v.url, className: 'Img' },),
            ),
            React.DOM.td({ className: 'Name' }, v.name),
            React.DOM.td({ className: 'Price' }, v.price),
            React.DOM.td({ className: 'Count' }, v.count),
            React.DOM.td({ },
                React.DOM.input({className: 'button', type: 'button', value: 'удалить', onClick: this.deleteItem },
            ),
            ),
        )
        
        )

        return React.DOM.div(
        { className: 'shop' },
        React.DOM.h1(null, "Cписок товаров"),
        React.DOM.table({ className: 'Items' },
            React.DOM.tbody(null, itemsCode),
        )  
        );
    },

});
