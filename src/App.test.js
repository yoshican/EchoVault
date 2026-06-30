// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchoVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchoVault/i);
    expect(titleElement).toBeInTheDocument();
});
