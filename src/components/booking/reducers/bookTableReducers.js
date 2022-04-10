import { ADD_BOOKING, DELETE_BOOKING } from "../actions/bookTableActions";

export const bookTableReducerInitialState = {
  bookings: [],
};

export const bookTableReducer = (
  state = bookTableReducerInitialState,
  action
) => {
  if (action.type === ADD_BOOKING) {
    console.log("bookTableReducer", state);
    return {
      ...state,
      bookings: state.bookings.concat(action.booking),
    };
  }

  if (action.type === DELETE_BOOKING) {
    console.log("delete", action.bookingId);
    return {
      ...state,
      bookings: state.bookings.filter((item) => item.id !== action.bookingId),
    };
  }
};
