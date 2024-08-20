import React from 'react';
import { AuthProvider } from './AuthContext';

import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <AuthProvider>
    <App />
    <home/>
  </AuthProvider>
    
  </React.StrictMode>
);
