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
        lines2.push(<br key={i}></br>);
      lines2.push(lines[i]);
    }
    console.log(lines2);
    return lines2;
  }
     
          
  
}

export default BR2JSX;

 