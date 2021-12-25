import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './components/GlobalStyle.js';

const rootElement = window.document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <GlobalStyle />  
    </React.StrictMode>, rootElement);

