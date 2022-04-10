export const ADD_BOOKING = "APP/BOOK_TABLE/ADD_BOOKING";
export const DELETE_BOOKING = "APP/BOOK_TABLE/DELETE_BOOKING";

export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

export const deleteBooking = (bookingId) => ({
  type: DELETE_BOOKING,
  bookingId,
});
