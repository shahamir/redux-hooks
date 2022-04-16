import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const NetlifyFunctionTests = () => {
  const location = useLocation();
  const [resp, setResp] = useState("");

  React.useEffect(() => {
    fetch(
      `${window.location.protocol}//${window.location.hostname}/.netlify/functions/helloWorld`
    )
      .then((response) => response.json())
      .then((data) => setResp(data.message));
  }, [location]);

  return (
    <div>
      <p>{resp}</p>
    </div>
  );
};
