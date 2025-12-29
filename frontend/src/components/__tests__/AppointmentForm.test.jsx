import React from 'react';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import AppointmentForm from '../AppointmentForm';
import axios from 'axios';
import { vi, it, expect } from 'vitest';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: { doctors: [] } })),
    post: vi.fn(() => Promise.resolve({ data: { message: 'ok' } })),
  },
}));

it('AppointmentForm should have no basic accessibility violations', async () => {
  const { container } = render(<AppointmentForm />);
  const results = await axe.run(container);
  // log violations to help identify any failures during CI
  if (results.violations.length) console.log('axe violations:', JSON.stringify(results.violations, null, 2));
  expect(results.violations.length).toBe(0);
});