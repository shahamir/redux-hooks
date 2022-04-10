export const ADD_TODO = "APP/TOODO/ADD_TODO";
export const DELETE_TODO = "APP/TODO/DELETE_TODO";

export const todoInitialState = {
  todos: [],
};

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  todoId,
});

export const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log(ADD_TODO);
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todo.id),
      };
    }
  }
};
