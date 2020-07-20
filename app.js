const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res, next) => {
  res.send({
    title: "teste de express/nodemon",
  });
});

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
