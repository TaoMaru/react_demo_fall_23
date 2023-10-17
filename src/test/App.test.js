import { render, screen } from '@testing-library/react';
import App from '../App';
import APODContent from '../components/APODContent';
import MarsRoverContent from '../components/MarsRoverContent';
import IndexRoute from '../components/IndexRoute';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders apod component', () => {
  render(<APODContent />);
  const apodElement = document.querySelector('.apod-content');
  expect(apodElement).toBeInTheDocument();
});
test('renders apod component and has copyright secion', () => {
  render(<MarsRoverContent />);
  const apodElement = screen.getByText(/Taken by/i);
  expect(apodElement).toBeInTheDocument();
});
test('renders mars rover component', () => {
  render(<MarsRoverContent />);
  const marsRoverElement = screen.getByText(/Landing date/i);
  expect(marsRoverElement).toBeInTheDocument();
});
test('renders mars rover component and has rover section', () => {
  render(<MarsRoverContent />);
  const apodElement = screen.getByText(/Taken by/i);
  expect(apodElement).toBeInTheDocument();
});
test('loads footer component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Thanks for visiting/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders IndexRoute', () => {
  render(<IndexRoute />);
  const indexRouteElement = screen.getByText(/Taken by/i);
  expect(indexRouteElement).toBeInTheDocument();
});






