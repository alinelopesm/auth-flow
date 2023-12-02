import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );

  reportWebVitals();
} else {
  console.error('Element with id \'root\' not found in the document.');
}