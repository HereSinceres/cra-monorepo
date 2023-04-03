import './index.css';

import { numToWord } from 'lib-webpack/lib/util/aa/sum2';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'ui/lib/Button';

import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(numToWord(1));
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
        <Button text='Texts' />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
