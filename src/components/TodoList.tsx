import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="mt-4 max-h-64 overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
