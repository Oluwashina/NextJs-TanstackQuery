import {create} from 'zustand'

type Todo = {
  id: string
  title: string
  completed: boolean
}

type TodoState = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: string) => void
  toggleTodo: (id: string) => void
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
    removeTodo: (id) => set((state) => ({todos: state.todos.filter((todo) => todo.id !== id)})),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ),
        })),
}))