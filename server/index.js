const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  console.log(123);
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(123);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
