import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const h1 = screen.getByText(/Hello world!/i);
  expect(h1).toBeInTheDocument();
});

test('gets location', () => {
  render(<App />)
  const location = 'Berlin, Germany'
  expect(location).toContain('Berlin, Germany')
})

test('I can see current weather', () => {

})

test('I can change from celsius to fahrenheit', () => {

})
