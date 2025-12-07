import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'test-data' }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve({ data: 'test-data' }));
    render(<CoreFunctionalityComponent />);

    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  });

  test('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);

    const errorMessage = screen.getByText(/failed to fetch/i);
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  test('handles user input and submits form', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: 'test-input' } });
    fireEvent.click(screen.getByText(/submit/i));

    const submittedValue = screen.getByText(/submitted:/i);
    expect(submittedValue).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.submit(screen.getByRole('form'));
    const errorMessage = screen.getByText(/please fill out this field/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('component is accessible', async () => {
    render(<CoreFunctioninalityComponent />);

    // Check for proper ARIA roles and attributes
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-label');

    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('aria-labelledby');

    // Additional accessibility checks can be added here
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({ data: 'test-data' }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state while fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve({ data: 'test-data' }));
    render(<CoreFunctionalityComponent />);

    const loader = screen.getByRole('status');
    expect(loader).toBeInTheDocument();

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));
  });

  test('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<CoreFunctionalityComponent />);

    const errorMessage = screen.getByText(/failed to fetch/i);
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  test('handles user input and submits form', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: 'test-input' } });
    fireEvent.click(screen.getByText(/submit/i));

    const submittedValue = screen.getByText(/submitted:/i);
    expect(submittedValue).toBeInTheDocument();
  });

  test('validates form inputs and shows error messages', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.submit(screen.getByRole('form'));
    const errorMessage = screen.getByText(/please fill out this field/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('component is accessible', async () => {
    render(<CoreFunctioninalityComponent />);

    // Check for proper ARIA roles and attributes
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-label');

    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('aria-labelledby');

    // Additional accessibility checks can be added here
  });
});