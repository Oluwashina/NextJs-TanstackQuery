import "@testing-library/jest-dom";
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup(); // Cleans up the DOM after each test
  vi.clearAllMocks(); // Clears all mocks after each test
});