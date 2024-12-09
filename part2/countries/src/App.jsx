import { useEffect, useState } from "react";
import axios from "axios";
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
  }
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
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <div>capital {filteredCountries[0].capital}</div>
          <div>area {filteredCountries[0].area}</div>
          <div style={{ margin: "20px 0", fontWeight: "bold" }}>languages:</div>
          {filteredCountries[0].languages && (
            <ul>
              {Object.values(filteredCountries[0].languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          )}
          <img
            src={filteredCountries[0].flags.png}
            alt={filteredCountries[0].name.common}
            width={"150px"}
          />
        </div>
      ) : (
        filteredCountries.map((country) => {
          return <div key={country.name.common}>
            <span>{country.name.common}</span>
            <button onClick={() => handleClick(country)}>show</button>
          </div>;
        })
      )}
    </div>
  );
}

export default App;
