import { ADD_TODO, DELETE_TODO } from "../actions/todoActions";

export const todoInitialState = {
  todos: [],
};

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
    default: {
      return state;
    }
  }
};
