import React, { useState } from "react";

const Geolocation = () => {
  const [location, setLocation] = useState({ lat: "", long: "" });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        setError(null); // Clear error if successful
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  return (
    <div>
      <h2>Geolocation</h2>
      <button onClick={getLocation}>Get Geo Location</button>
      {location.lat && location.long && (
        <p>Latitude: {location.lat}, Longitude: {location.long}</p>
      )}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default Geolocation;
