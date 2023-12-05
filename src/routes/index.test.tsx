import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AppRoutes from './index';
import { MemoryRouter } from 'react-router-dom';

test('renders routes without crashing', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppRoutes />
    </MemoryRouter>
  );
});
  
test('renders About component for /about route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <AppRoutes />
    </MemoryRouter>
  );
  expect(screen.getByText('About')).toBeInTheDocument(); // Altere 'About' para o texto relevante na página About
});