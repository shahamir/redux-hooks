import {
  bookTableReducer,
  bookTableReducerInitialState,
} from "../components/booking/reducers/bookTableReducers";
import {
  todoInitialState,
  todoReducer,
} from "../components/todo/reducers/todoReducer";
import { postReducer, postsReducersInitialState } from "./postsReducer";

const initialState = {
  ...bookTableReducerInitialState,
  ...todoInitialState,
  ...postsReducersInitialState,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  bookings: bookTableReducer,
  todos: todoReducer,
  posts: postReducer,
});

export { initialState, appReducers };
