import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importar Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);