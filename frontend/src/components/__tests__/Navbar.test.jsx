import React from 'react';
import { render, screen } from '@testing-library/react';
import axe from 'axe-core';
import Navbar from '../Navbar';
import { vi, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

it('Navbar should have no basic accessibility violations', async () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});

it('Navbar renders links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(screen.getByLabelText(/home/i)).toBeInTheDocument();
});