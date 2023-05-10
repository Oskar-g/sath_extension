var express = require("express");
var app = express();

app.use(express.static("src"));
app.get("/", function(req,res){
  res.render("home");
});

app.listen(80, '127.0.0.1', function(){
console.log("server started");
});