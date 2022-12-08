var express = require("express");
var mysql = require("mysql2");
var bodyParser = require("body-parser");
const { faker } = require("@faker-js/faker");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us",
});

var data = [];
for (var i = 0; i < 500; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

var q1 = "INSERT INTO users (email, created_at) VALUES ?";

connection.query(q1, [data], function (err, result) {
  console.log(err);
  console.log(result);
});

app.get("/", function (req, res) {
  // Find count of users in DB
  var q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function (err, results) {
    if (err) throw err;
    var count = results[0].count;
    res.render("home", { count: count });
  });
});

app.post("/register", function (req, res) {
  var person = {
    email: req.body.email,
  };
  connection.query("INSERT INTO users SET ?", person, function (err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("Server running on 3000!");
});
