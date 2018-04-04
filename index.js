const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use("/styles", express.static(__dirname + "/styles"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("main");
})

app.listen(3000, () => {
  console.log('Ayy, we up on port 3000!')
});