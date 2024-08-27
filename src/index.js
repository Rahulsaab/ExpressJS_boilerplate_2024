const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const routes = require('./routes');

const app = express();

app.use(cors());
// app.use(morgan(':method :url :status :user-agent - :response-time ms'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}))
// app.use('/', routes);
dotenv.config()
const port=process.env.PORT
const connection = process.env.CONNECTION_STRING
mongoose
  .connect(
    connection
  )
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((error) => {
    console.log("Database is not connected", error);
  });

  app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
  });