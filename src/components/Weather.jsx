import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_APP_APIKEY;
  // Function for input field to get city name
  const handleCityName = (e) => {
    setCity(e.target.value);
  };
  const handleFetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("City Not Found");
      }
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Weather APP</h1>
      <input type="text" value={city} onChange={handleCityName} />
      <button onClick={handleFetchWeather}>Get Weather</button>
      <div>{error}</div>
      <h2>
        {weather && (
          <div>
            <h2>{weather.main.temp}Farehnheit</h2>
          </div>
        )}
      </h2>
    </div>
  );
}
