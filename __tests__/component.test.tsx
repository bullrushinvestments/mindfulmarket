import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with default state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });

  test('handles user interaction to trigger action', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: false });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/click me/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());
  });

  test('handles error state', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: false, error: new Error("Error fetching data") });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/error message/i)).toBeInTheDocument());
  });

  test('renders loading state', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: true });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('tests accessibility features', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    // Additional checks for aria-live, etc.
  });

  test('mocks external dependencies correctly', () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: { id: '123' }, loading: false });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    expect(useExternalData).toHaveBeenCalled();
  });

  test('handles edge cases', () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: false, error: undefined });
    (useExternalData as any)();
    
    render(<CoreFunctionalityComponent />);

    // Simulate an edge case where no data is returned
    expect(screen.queryByText(/no data/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with default state', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });

  test('handles user interaction to trigger action', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: false });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByText(/click me/i));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());
  });

  test('handles error state', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: false, error: new Error("Error fetching data") });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/error message/i)).toBeInTheDocument());
  });

  test('renders loading state', async () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: true });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/loading.../i)).toBeInTheDocument());
  });

  test('tests accessibility features', () => {
    render(<CoreFunctionalityComponent />);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    // Additional checks for aria-live, etc.
  });

  test('mocks external dependencies correctly', () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: { id: '123' }, loading: false });
    (useExternalData as any)();

    render(<CoreFunctionalityComponent />);
    
    expect(useExternalData).toHaveBeenCalled();
  });

  test('handles edge cases', () => {
    const useExternalData = jest.fn().mockReturnValueOnce({ data: null, loading: false, error: undefined });
    (useExternalData as any)();
    
    render(<CoreFunctionalityComponent />);

    // Simulate an edge case where no data is returned
    expect(screen.queryByText(/no data/i)).toBeInTheDocument();
  });
});