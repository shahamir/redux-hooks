import React from "react";
import { useAppState } from "../../store/Store";
import { addBooking } from "./actions/bookTableActions";
import "./BookingForm.css";
const BookingForm = () => {
  const [state, dispatch] = useAppState();
  console.log(state);
  const bookingFactory = ({
    name,
    numberOfPeople,
    dateTime,
    numberOfContact,
  }) => ({
    id: crypto.randomUUID(),
    name,
    numberOfPeople,
    dateTime,
    numberOfContact,
  });

  const [form, setForm] = React.useState({
    name: "",
    numberOfPeople: "",
    dateTime: "",
    numberOfContact: "",
  });

  const handleInputOnChange = ({ currentTarget: { name, value } }) =>
    setForm((state) => ({ ...state, [name]: value }));

  const handleOnBookATable = () => {
    dispatch(addBooking(bookingFactory(form)));
  };

  const formStyle = {
    formControl: {
      margin: "16pt",
    },
    input: {
      margin: "0 16pt",
    },
    label: {
      minWidth: "400px",
    },
  };

  return (
    <>
      <div className="form">
        <h2 style={{ gridColumn: "1 / 3" }}>Form</h2>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputOnChange}
          value={form.name}
        />

        <label htmlFor="numberOfContact">Telephone of contact</label>
        <input
          type="text"
          id="numberOfContact"
          name="numberOfContact"
          onChange={handleInputOnChange}
          value={form.numberOfContact}
        />

        <label htmlFor="numberOfPeople">Date and Time</label>
        <input
          type="text"
          id="numberOfPeople"
          name="numberOfPeople"
          onChange={handleInputOnChange}
          value={form.numberOfPeople}
        />

        <label htmlFor="dateTime">Number of Guests</label>
        <input
          type="datetime-local"
          id="dateTime"
          name="dateTime"
          onChange={handleInputOnChange}
          value={form.dateTime}
        />

        <button
          type="button"
          onClick={handleOnBookATable}
          style={{ gridColumn: "2 / 3" }}
        >
          Book a table
        </button>
      </div>
    </>
  );
};

export default BookingForm;
