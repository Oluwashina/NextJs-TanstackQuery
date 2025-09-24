import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <TodoForm />
      <TodoList />
    </main>
  );
}
