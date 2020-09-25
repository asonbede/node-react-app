const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { response } = require("express");
const app = express();
app.use(cors());

//create route
app.get("/api", (req, res) => {
  const user = req.query.user || "asonbede";
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      console.log(typeof response.data);
      res.json({ user: response.data });
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
