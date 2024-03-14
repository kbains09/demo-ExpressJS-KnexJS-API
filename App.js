require("dotenv").config();
const knexconfig = require("./knexfile");

console.log(knexconfig);
const knex = require("knex")(knexconfig);
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const router = require("./Routers/router-1");
const wareHouseController = require("./controller/wareHouseController");
const routers = require("./Routers/router-1");
const routers2 = require("./Routers/router-2");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/warehouse", routers);
app.use("/inventory", routers2);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
