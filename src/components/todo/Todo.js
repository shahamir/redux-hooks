import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};
