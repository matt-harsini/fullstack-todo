const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3000;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
const routes = require("./routes/routes");

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
