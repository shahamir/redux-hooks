import React from "react";
import { addTodo } from "../../reducers/todoReducer";
import { useAppState } from "../../store/Store";

export const TodoForm = () => {
  const [, dispatch] = useAppState();
  const [value, setValue] = React.useState("");

  const handleOnclick = () => {
    console.log("Value: ", value);
    dispatch(addTodo({ todo: value, id: crypto.randomUUID() }));
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
