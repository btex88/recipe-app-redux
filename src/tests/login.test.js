import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';

import { renderWithRouterAndStore } from './renderWithRouterAndStore';

describe('Test Login Page', () => {
  it('should have a title', () => {
    renderWithRouterAndStore(<App />);
    expect(screen.getByTestId('login-title')).toBeInTheDocument();
  });

  it('should have a logo image', () => {
    renderWithRouterAndStore(<App />);
    expect(screen.getByTestId('login-logo-img')).toBeInTheDocument();
  });

  it('should have 2 inputs', () => {
    renderWithRouterAndStore(<App />);
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });

  it('should have a login button', () => {
    renderWithRouterAndStore(<App />);
    expect(screen.getByTestId('login-submit-btn')).toBeInTheDocument();
  });

  it('should have localstorage keys', () => {
    renderWithRouterAndStore(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwdInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-submit-btn');

    fireEvent.change(emailInput, { target: { value: 'test@test.io' } });
    fireEvent.change(passwdInput, { target: { value: '123456a' } });
    fireEvent.click(loginButton);

    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
    expect(localStorage.getItem('user')).toEqual('{"email":"test@test.io"}');
  });
});
