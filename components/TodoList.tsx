"use client";

import { useTodos } from "@/hooks/useTodos";

export default function TodoList() {
  const { todos, isLoading, toggleTodo, deleteTodo } = useTodos();

  if (isLoading) return <p className=" mt-4">Loading...</p>;

  return (
    <ul className="mt-6 space-y-2">
      {todos?.map((todo: any) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span
            onClick={() => toggleTodo.mutate(todo.id)}
            className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
          >
            {todo.title}
          </span>
          <button
            onClick={() => deleteTodo.mutate(todo.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
