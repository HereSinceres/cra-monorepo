import './App.css';

import {wordToNum} from 'lib-webpack/lib/util/aa/sum2'
import React from 'react';
import { Button } from 'ui/lib/Button';

import c from './index.module.scss';
import logo from './logo.svg';

alert(wordToNum('one'))
function App() {
  return (
    <div className={  `App ${c.red}`}>
      <Button text="Test Button"/>
    </div>
  );
}

export default App;
