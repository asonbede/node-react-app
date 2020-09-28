const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

//create route
app.get("/api", (req, res) => {
  const user = req.query.user || "nigeria";
  axios
    .get(`https://restcountries.eu/rest/v2/name/${user}`) //https://restcountries.eu/rest/v2/name/nigeria //https://api.github.com/users/${user}
    .then((response) => {
      console.log(typeof response.data);
      console.log(user, "stringgggg");
      res.json(response.data);
    })
    .catch((error) => {
      console.log("error occuredddddd");
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
