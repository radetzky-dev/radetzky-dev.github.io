import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestMio from './TestMio';
import Tabella from './Tabella';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestMio />
    <Tabella />
    <App />
  </React.StrictMode>
);

