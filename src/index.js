import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProductsContextProvider } from './context/productsContex';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </React.StrictMode>
);

