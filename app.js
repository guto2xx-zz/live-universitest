const express = require("express");
const port = 3000;
const app = express();

const path = require("path");

app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/:option?/:quantity?", (req, res, next) => {
  let arr = [];
  for (var i = 1; i <= Number(req.params.quantity); i++) {
    arr.push(`${req.params.option}${i}`);
  }

  res.locals.mainList = arr;
  res.locals.quantity = req.params.quantity;

  res.render("index", {
    title: "teste de express/nodemon",
    version: "0.0.0",
  });
});

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
