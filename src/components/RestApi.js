import { useEffect, useState } from "react";
import axios from "axios";
import "./RestApi.css";

export default function RestApi() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  // Fetch
  /*
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,currencies,region,subregion,continents,population,borders,flags"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
*/
  // Asinc Await
  /*
  useEffect(() => {
    const requestsetCountries = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,currencies,region,subregion,continents,population,borders,flags"
      );
      const data = await response.json();
      console.log(data);
      setCountries(data);
    };
    requestsetCountries();
  }, []);
*/

  // Axios
  useEffect(() => {
    const requestsetCountries = async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,cca2,cca3,capital,currencies,region,subregion,continents,population,borders,flags"
      );
      const data = await response.data;

      setCountries(data);
    };
    requestsetCountries();
  }, []);

  return (
    <div className="container">
      <div>
        <div className="select-container">
          <select
            className="select-box"
            onChange={(e) => setSelectedCountry(e.target.value)}
            value={selectedCountry}
          >
            {countries.map((country) => (
              <option key={country.name.common}>{country.name.common}</option>
            ))}
          </select>
          <span className="custom-arrow">✈️</span>
        </div>
        <h3
          style={{ fontSize: "28px", textAlign: "center", marginTop: "60px" }}
        >
          <p>{selectedCountry}</p>
        </h3>
      </div>
    </div>
  );
}
