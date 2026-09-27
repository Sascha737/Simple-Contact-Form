import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
});

test('adds a contact and confirms when the form is cleared', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'Ada Lovelace' },
  });
  fireEvent.change(screen.getByLabelText('Phone number'), {
    target: { value: '1234567890' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Add contact' }));

  expect(screen.getByText('Ada Lovelace')).toBeInTheDocument();
  expect(screen.getByText('1234567890')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Clear' }));
  expect(screen.getByRole('status')).toHaveTextContent('Contact details cleared.');
});

test('header links open separate sign-up and login pages', () => {
  render(<App />);
  const accountNavigation = screen.getByRole('navigation', { name: 'Account' });

  fireEvent.click(within(accountNavigation).getByRole('link', { name: 'Sign up' }));
  expect(screen.getByRole('heading', { name: 'Create your account' })).toBeInTheDocument();

  fireEvent.click(within(accountNavigation).getByRole('link', { name: 'Log in' }));
  expect(screen.getByRole('heading', { name: 'Log in' })).toBeInTheDocument();
});

test('account forms explain that authentication is not connected', () => {
  render(<App />);
  const accountNavigation = screen.getByRole('navigation', { name: 'Account' });
  fireEvent.click(within(accountNavigation).getByRole('link', { name: 'Log in' }));

  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'person@example.com' },
  });
  fireEvent.change(screen.getByLabelText('Password'), {
    target: { value: 'example-password' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Log in' }));

  expect(screen.getByRole('status')).toHaveTextContent(
    'Authentication is not connected yet.'
  );
});
