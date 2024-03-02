import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders without crashing', () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/0/i);
  linkElements.forEach(linkElement => {
    expect(linkElement).toBeInTheDocument();
  });
});

