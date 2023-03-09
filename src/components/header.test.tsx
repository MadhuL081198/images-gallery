import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';
import { Header } from './header';

test('renders learn react link', () => {
  const headerText = "Photos"
    const { getByText } = render(
    <Header title={headerText}></Header>
  );
  expect(getByText(headerText)).toBeInTheDocument()
});
