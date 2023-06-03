import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Context } from './components/Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
      <Context>
        <App />
      </Context>
    </HashRouter>
  </React.StrictMode>
);

