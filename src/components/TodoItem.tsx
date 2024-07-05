import React from "react";

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b" onClick={() => toggleComplete(todo.id)}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} className="mr-2" />
      <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="ml-2 text-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
