import React from "react";
import { useLocation } from "react-router-dom";

export const Traffic = () => {
  const location = useLocation();
  const [departureBoard, setDepartureBoard] = React.useState(null);

  React.useEffect(() => {
    fetch(
      `${window.location.protocol}//${window.location.hostname}/.netlify/functions/trafiklabDeparture`
    )
      .then((response) => response.json())
      .then((data) => setDepartureBoard(data));
  }, [location]);

  return <div>{departureBoard ? <p>Loaded</p> : <p>Loading...</p>}</div>;
};
