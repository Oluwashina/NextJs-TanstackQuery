import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from '../app/page'
 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Home page', () => {
  it('renders correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )
    expect(screen.getByRole('heading', { level: 1, name: 'Todo App' })).toBeDefined();
  })
})