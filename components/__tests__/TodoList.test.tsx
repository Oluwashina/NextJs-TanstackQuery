import { expect, test,it, vi, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'
import { useTodos } from '@/hooks/useTodos'

// Mock the useTodos hook
vi.mock('@/hooks/useTodos')
const mockUseTodos = vi.mocked(useTodos)


// Helper function to create mock mutation objects
const createMockMutation = () => ({
  mutate: vi.fn(),
  mutateAsync: vi.fn(),
  isLoading: false,
  isError: false,
  isSuccess: false,
  isPending: false,
  error: null,
  data: undefined,
  reset: vi.fn(),
} as any)

test('renders loading state', () => {
  // Mock the hook to return loading state with complete mutation objects
 mockUseTodos.mockReturnValue({
    todos: [],
    isLoading: true,
    addTodo: createMockMutation(),
    toggleTodo: createMockMutation(),
    deleteTodo: createMockMutation(),
  })

  render(<TodoList />)
  expect(screen.getByText('Loading...')).toBeDefined()
})

// 
describe('Delete button', () => {
  it('renders a delete button', () => {

    // Mock the hook with actual todos so delete button will render
    mockUseTodos.mockReturnValue({
      todos: [{ id: '1', title: 'Test todo', completed: false }],
      isLoading: false,
      addTodo: createMockMutation(),
      toggleTodo: createMockMutation(),
      deleteTodo: createMockMutation(),
    })

    render(<TodoList />)
    expect(screen.getByRole('button', { name: 'Delete' })).toBeDefined();
  });
});