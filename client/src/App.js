import axios from "axios";

import React, { useState, useEffect } from "react";
const App = () => {
  const [user, setUser] = useState(null);
  const [searchStr, setsearchStr] = useState("asonbede");

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
        setUser(response.data);
      })
      .catch((error) => {
        console.log("error occured");
      });
  };

  return (
    user && (
      <div>
        <form onSubmit={handleSubmit}>
          <input value={searchStr} onChange={handleChange} />
          <button type="submit">submit </button>
        </form>
        <p>{JSON.stringify(user)}</p>
      </div>
    )
  );
};
export default App;
