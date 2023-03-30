import './App.css';

import React from 'react';
import { Button } from 'ui/Button';

import c from './index.module.scss';
import logo from './logo.svg';

function App() {
  return (
    <div className={  `App ${c.red}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={c.red}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button text="Test Button"/>
      </header>
    </div>
  );
}

export default App;
