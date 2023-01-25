import React from 'react';

let withRainbowFrame = colors => Comp => props => {
  let Code = <Comp {...props} />;
  for (let color of colors) {
    Code = <div style={{ border: `solid 6px  ${color}`, padding: "7px" }}>{Code}</div>
  }
  return Code;
};
 
export { withRainbowFrame };


 