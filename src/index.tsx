import React from 'react';

import { CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
