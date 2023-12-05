import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRoutes from './index';

test('renders routes without crashing', () => {
  render(<AppRoutes />);
});
  
test('renders home ande header', () => {
  render(<AppRoutes />);
  expect(screen.getByText('Boas vindas!!')).toBeInTheDocument();
});