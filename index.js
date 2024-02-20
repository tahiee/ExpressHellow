const express = require("express");
require('dotenv').config()
const app = express();
// const port = 4000;


app.get("/", (req, res) => {
  res.send("Hello World! kia hal hai");
});

app.get("/login", (req, res) => {
  res.send(`login route my mera name ${process.env.MYUSERNAME}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
