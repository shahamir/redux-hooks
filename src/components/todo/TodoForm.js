import React from "react";
import { useAppState } from "../../store/Store";
import { addTodo } from "./actions/todoActions";

export const TodoForm = () => {
  const [, dispatch] = useAppState();
  const [value, setValue] = React.useState("");

  const handleOnclick = () => {
    console.log("Value: ", value);
    dispatch(
      addTodo({ todo: value ? value : "Empty", id: crypto.randomUUID() })
    );
  };
  return (
    <div style={{ gridArea: "c" }}>
      <h1>Add Todo</h1>
      <input onChange={(e) => setValue(e.target.value)} value={value}></input>
      <button type="button" onClick={handleOnclick}>
        Add Todo
      </button>
    </div>
  );
};
