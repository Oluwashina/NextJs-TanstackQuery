import { NextResponse } from "next/server";

let todos = [
  { id: "1", title: "Learn Next.js", completed: false },
  { id: "2", title: "Integrate React Query", completed: false },
  { id: "3", title: "Deploy to Vercel", completed: false },
];

export async function GET() {
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTodo = {
    id: Date.now().toString(),
    title: body.title,
    completed: false,
  };
  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}

export async function PATCH(request: Request) {
    const {id} = await request.json();
    todos = todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    return NextResponse.json({success: true});
}

export async function DELETE(request: Request) {
    const {id} = await request.json();
    todos = todos.filter((t) => t.id !== id);
    return NextResponse.json({success: true});
}