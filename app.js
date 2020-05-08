const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
var date = new Date();
var currentDay = date.getDay();
var day = "";

if (currentDay===6 || currentDay ===0){
  day = "Weekend"
}else{
  day="Weekday"
}
res.render("list", {kindOfDay:day})

})



app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
})
