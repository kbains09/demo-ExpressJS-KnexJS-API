require('dotenv').config();
const knex = require('knex')(require('./knexfile')); 
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const router = require('./Routers/router-1');


// Middleware
app.use(cors());
app.use(express.json());
// change the route name as per team agreement
app.use('/test', router);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


