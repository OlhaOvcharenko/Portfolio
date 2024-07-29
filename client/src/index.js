import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(
  <React.StrictMode>
   
      <Router>
        <App />
      </Router>

  </React.StrictMode>
);
