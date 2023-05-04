import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShowContext, { ShowProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ShowProvider>

    <App />

    </ShowProvider>
  </React.StrictMode>
);


