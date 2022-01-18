import { render, screen } from '@testing-library/react';
import App from './App';

test('renders photos', () => {
  render(<App />);
  const element = screen.getByText(/Mars Rover Photos/i);
  expect(element).toBeInTheDocument();
});
