import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_SOME_KEY;
function CountryInfo({ country }) {
  let [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  }, []);
  const temp = `${(weather?.main.temp - 273.15).toFixed(2)} Celcius`;
  const wind = `${weather?.wind.speed.toFixed(2)} m/s`;
  const humidity = `${weather?.main.humidity}`;
  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;
  const desc = `${weather?.weather[0].description}`;
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <div style={{ margin: "20px 0", fontWeight: "bold" }}>languages:</div>
      {country.languages && (
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      )}
      <img src={country.flags.png} alt={country.name.common} width={"150px"} />
      {weather && (
        <div>
          <h3>Weather in {country.capital}:</h3>
          <p>
            Temperature: {temp} <br />
            <img
              style={{
                width: "120px",
                height: "80px",
              }}
              src={weatherIcon}
              alt={`${country.capital} weather`}
            />
            <br />
            Wind: {wind} <br />
            Humidity: {humidity} <br />
            Weather: {desc} <br />
          </p>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
