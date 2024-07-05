import React, { useState } from "react";
import TodoList from "./TodoList";
import "./TodoApp.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([{ id: Date.now(), text: newTodo, completed: false }, ...todos]);
      setNewTodo("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div
        className="h-[40vh] w-full bg-cover bg-top absolute top-0 left-0 -z-[1]"
        style={{ backgroundImage: "url('http://gallery-img.521xiao.cn/IMG_0203.jpg')" }}
      ></div>
      <div className="flex flex-col items-center min-h-screen">
        <div className="w-full max-w-md mt-40">
          <h1 className="text-5xl font-bold mb-6 text-white">TODO</h1>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full flex-1 mb-4 p-4 border rounded-md"
            placeholder="Create a new todo..."
          />
          <div className="w-full max-w-md p-4 bg-white rounded shadow-lg shadow-blue-200">
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
