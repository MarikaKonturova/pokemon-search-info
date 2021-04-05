import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router} from 'react-router-dom';
import {createBrowserHistory, History} from 'history';
export const history: History= createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
        <App history={history}/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
