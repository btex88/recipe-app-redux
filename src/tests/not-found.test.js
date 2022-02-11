import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/not-found-page';

import { renderWithRouterAndStore } from './renderWithRouterAndStore';

describe('Test NotFound Page', () => {
  it('should have a title', () => {
    renderWithRouterAndStore(<NotFound />);
    expect(screen.getByRole('heading', { name: /not found!/i })).toBeInTheDocument();
  });

  it('should have a logo image', () => {
    renderWithRouterAndStore(<NotFound />);
    expect(screen.getByAltText(/burning pepper/i)).toBeInTheDocument();
  });
});
