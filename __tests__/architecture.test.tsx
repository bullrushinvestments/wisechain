import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      designs: [
        { id: '1', name: 'Design A' },
        { id: '2', name: 'Design B' }
      ]
    }
  }),
}));

describe('Design Architecture Component Tests', () => {
  it('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  it('displays loading state while fetching data', async () => {
    // Simulate a delay in the API response
    jest.mock('./api', () => ({
      fetchData: jest.fn().mockReturnValue(new Promise(() => {}))
    }));
    
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    // Simulate an API failure
    jest.mock('./api', () => ({
      fetchData: jest.fn().mockRejectedValue(new Error('API Failure'))
    }));
    
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/failed to load designs/i)).toBeInTheDocument();
  });

  it('displays design names when data is fetched successfully', async () => {
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/design a/i));
    await waitFor(() => screen.getByText(/design b/i));
  });

  it('allows user to select a design and displays selected design name', async () => {
    const { getByRole } = render(<DesignArchitectureComponent />);

    fireEvent.click(getByRole('button', { name: /select design a/i }));
    
    await waitFor(() => expect(screen.getByText(/selected design: design a/i)).toBeInTheDocument());
  });

  it('ensures all interactive elements are accessible', () => {
    const { getAllByRole } = render(<DesignArchitectureComponent />);
    const buttons = getAllByRole('button');
    
    buttons.forEach(button => {
      expect(button).toBeVisible();
      expect(button).toHaveAttribute('aria-label');
    });
  });

  it('handles edge case where no designs are available', async () => {
    jest.mock('./api', () => ({
      fetchData: jest.fn().mockResolvedValue({ data: { designs: [] } })
    }));
    
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no designs available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      designs: [
        { id: '1', name: 'Design A' },
        { id: '2', name: 'Design B' }
      ]
    }
  }),
}));

describe('Design Architecture Component Tests', () => {
  it('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/design architecture/i)).toBeInTheDocument();
  });

  it('displays loading state while fetching data', async () => {
    // Simulate a delay in the API response
    jest.mock('./api', () => ({
      fetchData: jest.fn().mockReturnValue(new Promise(() => {}))
    }));
    
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when data fetching fails', async () => {
    // Simulate an API failure
    jest.mock('./api', () => ({
      fetchData: jest.fn().mockRejectedValue(new Error('API Failure'))
    }));
    
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/failed to load designs/i)).toBeInTheDocument();
  });

  it('displays design names when data is fetched successfully', async () => {
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/design a/i));
    await waitFor(() => screen.getByText(/design b/i));
  });

  it('allows user to select a design and displays selected design name', async () => {
    const { getByRole } = render(<DesignArchitectureComponent />);

    fireEvent.click(getByRole('button', { name: /select design a/i }));
    
    await waitFor(() => expect(screen.getByText(/selected design: design a/i)).toBeInTheDocument());
  });

  it('ensures all interactive elements are accessible', () => {
    const { getAllByRole } = render(<DesignArchitectureComponent />);
    const buttons = getAllByRole('button');
    
    buttons.forEach(button => {
      expect(button).toBeVisible();
      expect(button).toHaveAttribute('aria-label');
    });
  });

  it('handles edge case where no designs are available', async () => {
    jest.mock('./api', () => ({
      fetchData: jest.fn().mockResolvedValue({ data: { designs: [] } })
    }));
    
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/no designs available/i)).toBeInTheDocument();
  });
});