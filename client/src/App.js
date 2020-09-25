import axios from "axios";

import React, { useState, useEffect } from "react";
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api")
      .then((response) => {
        console.log(response.data, "clienttttt");
        setUser(response.data);
      })
      .catch((error) => {
        console.log("error occured");
      });
  }, []);

  return (
    user && (
      <div>
        <p>{JSON.stringify(user)}</p>
      </div>
    )
  );
};
export default App;
