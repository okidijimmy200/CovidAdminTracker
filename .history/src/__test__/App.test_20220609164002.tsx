import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  cons
  const div= getByTestId("container");;
  expect(div).toBeInTheDocument();
});
