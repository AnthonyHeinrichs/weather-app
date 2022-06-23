import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const h1 = screen.getByText(/Hello world!/);
  expect(h1).toBeInTheDocument();
});

test('gets location', () => {
})

test('I can see current weather', () => {
})

test('I can change from celsius to fahrenheit', () => {
})
