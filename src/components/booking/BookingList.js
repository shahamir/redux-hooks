import React from "react";
import { useAppState } from "../../store/Store";
import { deleteBooking } from "./actions/bookTableActions";

const BookingList = () => {
  const [state, dispatch] = useAppState();
  console.log(state);
  const { bookings } = state;

  const Booking = ({ item }) => (
    <>
      <div key={item.id}>
        <div>
          <b>Guest name:</b> {item.name}
          <button onClick={() => dispatch(deleteBooking(item.id))}>
            Delete
          </button>
        </div>
        <div>
          <b>Number of Contact:</b> {item.numberOfContact}
        </div>
        <div>
          <b>Number of Guests:</b> {item.numberOfPeople}
        </div>
        <div>
          <b>Date and Time:</b> {new Date(item.dateTime).toString()}
        </div>
        <hr />
      </div>
    </>
  );

  return (
    <div>
      <h2>Bookings List</h2>
      {bookings.map((booking) => (
        <Booking key={booking.id} item={booking} />
      ))}
    </div>
  );
};

export default BookingList;
