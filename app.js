var express = require('express');
var app = express();






// routes


app.get('/',  function(req, res){
   
res.send("hi");
   

});



// listen

app.listen(process.env.PORT || 5000);