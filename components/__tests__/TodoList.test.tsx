import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'
import { useTodos } from '@/hooks/useTodos'

// Mock the useTodos hook
vi.mock('@/hooks/useTodos')
const mockUseTodos = vi.mocked(useTodos)

test('renders loading state', () => {
  // Mock the hook to return loading state with complete mutation objects
  mockUseTodos.mockReturnValue({
    todos: [],
    isLoading: true,
    addTodo: {
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      isLoading: false,
      isError: false,
      isSuccess: false,
      isPending: false,
      error: null,
      data: undefined,
      reset: vi.fn(),
    } as any,
    toggleTodo: {
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      isLoading: false,
      isError: false,
      isSuccess: false,
      isPending: false,
      error: null,
      data: undefined,
      reset: vi.fn(),
    } as any,
    deleteTodo: {
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      isLoading: false,
      isError: false,
      isSuccess: false,
      isPending: false,
      error: null,
      data: undefined,
      reset: vi.fn(),
    } as any,
  })

  render(<TodoList />)
  expect(screen.getByText('Loading...')).toBeDefined()
})