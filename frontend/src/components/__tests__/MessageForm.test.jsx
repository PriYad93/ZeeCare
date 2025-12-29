import React from 'react';
import { render } from '@testing-library/react';
import axe from 'axe-core';
import MessageForm from '../MessageForm';
import axios from 'axios';
import { vi, it } from 'vitest';

vi.mock('axios', () => ({
  default: {
    post: vi.fn(() => Promise.resolve({ data: { message: 'ok' } })),
  },
}));

it('MessageForm should have no basic accessibility violations', async () => {
  const { container } = render(<MessageForm />);
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});