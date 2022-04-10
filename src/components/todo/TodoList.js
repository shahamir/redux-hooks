import React from "react";
import { useAppState } from "../../store/Store";

export const TodoList = () => {
  const [state, dispatch] = useAppState();
  const { todos } = state;

  console.log(todos);
  return (
    <div style={{ gridArea: "d" }}>
      <h1>Todos:</h1>
      {todos.map((item) => (
        <div key={item.id}>{item.todo}</div>
      ))}
    </div>
  );
};
