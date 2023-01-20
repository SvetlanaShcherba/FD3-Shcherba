import React from 'react';
import PropTypes from 'prop-types';


import './RainbowFrame.css';

class RainbowFrame extends React.Component {

static propTypes = {
  colors: PropTypes.array.isRequired   
};


    
  
  render() {
    let code = this.props.children;
    for (let color of this.props.colors) {
      code = <div style={{border: `solid 6px  ${color}`, padding:"7px"}}>{code}</div>
    }
    return code;
          
  }
}

export default RainbowFrame;

 