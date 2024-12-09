import { useEffect, useState } from "react";
import axios from "axios";
import CountryInfo from "./components/CountryInfo";

function App() {
  let [filter, setFilter] = useState("");
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let handleClick = (country) => {
    setFilter(country.name.common);
  };
  let filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });
  let handleChange = (e) => setFilter(e.target.value);
  return (
    <div>
      <form action="">
        <label>find countries</label>
        <input type="text" onChange={handleChange} />
      </form>
      {filter === "" ? (
        <p>Please enter a query</p>
      ) : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <CountryInfo country={filteredCountries[0]} />
      ) : (
        filteredCountries.map((country) => {
          return (
            <div key={country.name.common}>
              <span>{country.name.common}</span>
              <button onClick={() => handleClick(country)}>show</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
