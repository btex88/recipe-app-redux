import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';

// This is a helper function.
// Function usage extracted by freeCodeCamp, RTL Documentation & 2 adamjarling github repo.

export const getStore = (initialState) => {
  if (!initialState) return createStore(reducer, applyMiddleware(thunk));
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export const renderWithRouterAndStore = (
  component,
  { route = '/',
    history = createMemoryHistory({ initialEntries: [route] }) } = {},
  initialState,
) => {
  const store = getStore(initialState);
  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};

/*
Sources & References:
https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/;
https://testing-library.com/docs/example-reach-router/;
https://gist.github.com/adamjarling/9ac59f3f8984c4c19d34018ee8a0401c;
*/
