import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

jest.mock('react-router-dom', () => ({
    useRouteError: jest.fn()
}));

jest.mock('axios', () =>( {
  useRouteError: jest.fn()
}));

test('renders app', () => {
  render(<ErrorNotFound />);
  const linkElement = screen.getByText(/Sorry, an unexpected error has occurred/i);
  expect(linkElement).toBeInTheDocument();
});
