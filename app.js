const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");

var items=[];
app.get("/", function(req, res){

var date = new Date();
var today = date.getDay();
day = "";

var options = {
  weekday:"long",
  day:"numeric",
  month:"long"
};

var currentDay = date.toLocaleDateString("us-EN", options)
res.render("list", {kind_of_day:currentDay, items:items})

});

app.post("/", function(req, res){
  item = req.body.item1
  items.push(item)
  res.redirect("/")
})



app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
