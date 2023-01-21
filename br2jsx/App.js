﻿import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/br2jsx';

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
  <BR2JSX
    className={"text"}
    text={text}>
  </BR2JSX>
  , document.getElementById('container')
);

