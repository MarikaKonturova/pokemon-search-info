import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Router} from 'react-router-dom';
import {createBrowserHistory, History} from 'history';
//export const history: History= createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
