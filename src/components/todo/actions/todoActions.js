export const ADD_TODO = "APP/TOODO/ADD_TODO";
export const DELETE_TODO = "APP/TODO/DELETE_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  todoId,
});
