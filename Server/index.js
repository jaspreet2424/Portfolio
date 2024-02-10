const userRouter = require("./Routes/User");
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectDatabase = require("./Database");
const app = express();
const port = process.env.PORT;

connectDatabase();

app.use(express.json());
app.use(
  cors({
    credentials : true,
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    origin : "http://localhost:5173"
  })
);
app.use(cookieParser());

/*
{
    credentials: true,
    origin: "http://localhost:5731",
    methods: "GET , PUT , POST , DELETE",
  }
*/

app.use("/admin", userRouter);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
