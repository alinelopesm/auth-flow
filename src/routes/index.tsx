import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Home from '../pages/home/index';
import About from '../pages/About';
import LoginForm from '../pages/form';

const AppRoutes: React.FC = () => {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<LoginForm />} />
      </Routes>
    </App>
  );
};

export default AppRoutes;
