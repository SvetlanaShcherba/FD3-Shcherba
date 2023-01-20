import React from 'react';
import PropTypes from 'prop-types';


import './br2jsx.css';

class BR2JSX extends React.Component {

static propTypes = {
  text: PropTypes.string.isRequired   
};


    
  
  render () {
    let lines = this.props.text.split(/<br *\/?>/);
    let lines2 = [];
    for (let i = 0; i < lines.length; i++) {
      if (i)
        lines2.push(<br />);
      lines2.push(lines[i]);
    }
    
    return lines2;
  }
     
          
  
}

export default BR2JSX;

 