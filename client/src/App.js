import axios from "axios";

import React, { useState } from "react";
const App = () => {
  const [country, setCountry] = useState(null);
  const [searchStr, setsearchStr] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api")
  //     .then((response) => {
  //       console.log(response.data, "clienttttt");
  //       setUser(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error occured");
  //     });
  // }, []);

  const handleChange = (event) => {
    setsearchStr(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`/api?user=${searchStr}`)
      .then((response) => {
        console.log(response.data, "clienttttt");
        console.log(typeof response.data, "clienttttt222222");
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.log("error occured");
      });
  };
  if (country) {
    return (
      <div>
        <p>Input country Name to get its details</p>
        <form onSubmit={handleSubmit}>
          <input value={searchStr} onChange={handleChange} />
          <button type="submit">submit </button>
        </form>
        <p>Country Name: {country.name}</p>
        <p>Country capital: {country.capital}</p>
        <p> Country Region: {country.region} </p>
        <p> Country subregion: {country.subregion} </p>
        <p> Country population: {country.population} </p>
        <ul>
          Languages:
          {country.languages.map((language, index) => (
            <li key={index}>{language.name} </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>Input country Name to get its details</p>
        <form onSubmit={handleSubmit}>
          <input value={searchStr} onChange={handleChange} />
          <button type="submit">submit </button>
        </form>
      </div>
    );
  }
};
export default App;
