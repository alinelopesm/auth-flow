import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </React.StrictMode>
  );

  reportWebVitals();
} else {
  console.error('Element with id \'root\' not found in the document.');
}