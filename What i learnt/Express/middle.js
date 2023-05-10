const express = require("express");

const app = express();

const logger = require('./middlewares/logger');

const authorize = require("./middlewares/authorize");

const port = 3000;

// middleware are function which have access to request and response
app.use([logger, authorize]); // this app.use 

app.get("/", (req, res) => {
  console.log(req.query)
  res.status(200).send({ title: "Aditya ", message: "hehehe" });
  
});


// But what if i want to use this middleware in every route then comes in hand app.use

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
});
