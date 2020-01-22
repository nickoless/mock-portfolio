const express = require("express");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");
const app = express();

const srcPath = __dirname + "/scss";
const destPath = __dirname + "/public/css";

app.set("view engine", "ejs");
app.use(
  sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: "compressed",
    prefix: "/css"
  })
);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/scripts", express.static(__dirname + "/scripts"));

app.get("/", (req, res) => {
  res.render("main");
});

app.listen(3000, () => {
  console.log("Ayy, we up on port 3000!");
});
