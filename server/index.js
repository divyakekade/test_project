const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require('./database_connection');
const userRouter = require('./router/userRouter');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
connectDatabase();
app.use('/user', userRouter);
let port = 5000;
app.listen(port, () => { console.log(`App is listening to port ${port}`); });