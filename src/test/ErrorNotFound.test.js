import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

jest.mock('react-router-dom', () => ({
    useRouteError: jest.fn()
}));

test('renders ErrorNotFound than 50', () => {
  render(<ErrorNotFound count={25}/>);
  const linkElement = screen.getByText(/Sorry, an unexpected error has occurred/i);
  expect(linkElement).toBeInTheDocument();
});
