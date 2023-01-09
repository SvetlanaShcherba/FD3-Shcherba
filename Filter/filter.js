var filter=React.createClass({
    
    displayName: 'filter',

    propTypes: {
        wordsList: React.PropTypes.array.isRequired,
    },

    getInitialState: function () {
        return {
            isSorted: false,
            filterStr: '',
            wordsList: this.props.wordsList,
        };
    },

    sortChanged (eo) {
        this.setState ({ isSorted: eo.target.checked }, this.processList);
    },

    filterChanged (eo) {
        this.setState ({ filterStr: eo.target.value }, this.processList);
    },

    reset() {
        this.setState ({ isSorted: eo.target.checked, filterStr: eo.target.value }, this.processList);
    },

    processList() {
        let wordsList = this.props.wordsList; 
        if (this.state.filterStr)
            wordsList = wordsList.filter(w => w.includes(this.state.filterStr));
        if (this.state.isSorted)
            wordsList.sort();
        this.setState({ wordsList: wordsList });
    },
    
    render() {
        
            
        
        return React.DOM.div({},
            React.DOM.input({className: 'checkbox', type: 'checkbox', checked: this.state.isSorted, onClick: this.sortChanged }),
            React.DOM.input({ type: 'text', value: this.state.filterStr, onChange: this.filterChanged }),
            React.DOM.input({className: 'button',  type:'button',value: "Сброс", onClick: this.reset }),
            React.DOM.textarea({className: 'text', value: this.state.wordsList.join('\n') }),
            
        )
            
    },
})